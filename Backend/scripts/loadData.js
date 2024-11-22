const { Pool } = require('pg');
require('dotenv').config();
const fs = require('fs');
const csv = require('csv-parser');

const pool = new Pool({
    connectionString: process.env.POSTGRES_CONNECTION_STRING,
    ssl: {
        require: true, // Yêu cầu SSL
        rejectUnauthorized: false, // Chấp nhận chứng chỉ không xác thực (phát triển)
    },
});

async function loadCSV(filePath) {
    const client = await pool.connect();
    const results = [];

    try {
        // Đọc dữ liệu từ file CSV
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                // Đẩy từng dòng vào mảng
                results.push([
                    row.sbd,
                    parseFloat(row.toan) || null,
                    parseFloat(row.ngu_van) || null,
                    parseFloat(row.ngoai_ngu) || null,
                    parseFloat(row.vat_li) || null,
                    parseFloat(row.hoa_hoc) || null,
                    parseFloat(row.sinh_hoc) || null,
                    parseFloat(row.lich_su) || null,
                    parseFloat(row.dia_li) || null,
                    parseFloat(row.gdcd) || null,
                    row.ma_ngoai_ngu || null,
                ]);
            })
            .on('end', async () => {
                console.log(`Total rows parsed: ${results.length}`);

                try {
                    const query = `
              INSERT INTO g_scores (
                registration_no, math, literature, foreign_language, physics, chemistry, biology, 
                history, geography, civic_education, language_id
              ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
              ) ON CONFLICT (registration_no) DO NOTHING;
            `;

                    // Insert từng batch
                    const batchSize = 10000; // Số lượng bản ghi trong một batch
                    for (let i = 0; i < results.length; i += batchSize) {
                        const batch = results.slice(i, i + batchSize);
                        // Chia chạy từ i đến vị trí batch sẽ thực hiện 1 câu query với bao nhiêu batch
                        const queries = batch.map((row) =>
                            client.query(query, row)
                        );
                        await Promise.all(queries);
                        console.log(`Inserted batch ${i / batchSize + 1}`);
                    }
                    console.log('Data uploaded successfully!');
                } catch (err) {
                    console.error('Error inserting data:', err);
                } finally {
                    client.release();
                }
            });
    } catch (err) {
        console.error('Error loading CSV:', err.message);
    }
}

loadCSV('./db/diem_thi_thpt_2024.csv');

