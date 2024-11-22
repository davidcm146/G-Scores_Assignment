import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Top10Students = () => {
    const [topStudents, setTopStudents] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopStudents = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/top10`);
                setTopStudents(response.data);
            } catch (err) {
                setError('Failed to fetch data. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }
        fetchTopStudents();
    }, [])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Top 10 Students (Khối A)</h2>
            {topStudents.length === 0 ? (
                <p>No students found</p>
            ) : (
                <table className="w-full border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Rank</th>
                            <th className="border border-gray-300 px-4 py-2">SBD</th>
                            <th className="border border-gray-300 px-4 py-2">Toán</th>
                            <th className="border border-gray-300 px-4 py-2">Vật lý</th>
                            <th className="border border-gray-300 px-4 py-2">Hóa học</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topStudents.map((student, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{student.registration_no}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{student.math}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{student.physics}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{student.chemistry}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Top10Students