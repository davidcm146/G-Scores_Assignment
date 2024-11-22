require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DBNAME,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Yêu cầu SSL
        rejectUnauthorized: false, // Chấp nhận chứng chỉ không xác thực (có thể tắt trong môi trường phát triển)
      },
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DBNAME,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Yêu cầu SSL
        rejectUnauthorized: false, // Chấp nhận chứng chỉ không xác thực (có thể tắt trong môi trường phát triển)
      },
    },
  }
};
