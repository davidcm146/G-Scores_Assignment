import React from "react";

const DetailedScore = ({ score }) => {
    return (
        <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Detailed Scores</h2>
            {score ? (
                <div className="space-y-2">
                    <p><strong>SBD:</strong> {score.registration_no}</p>
                    <table className="w-full border-collapse border border-gray-300 mt-4">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-center">Môn</th>
                                <th className="border border-gray-300 px-4 py-2 text-center">Điểm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">Toán</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{score.math || "No data"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">Ngữ Văn</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{score.literature || "No data"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">Ngoại Ngữ</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{score.foreign_language || "No data"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">Vật lý</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{score.physics || "No data"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">Hóa học</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{score.chemistry || "No data"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">Lịch sử</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{score.history || "No data"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">Địa lý</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{score.geography || "No data"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">GDCD</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{score.civic_education || "No data"}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">Mã Ngôn Ngữ</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{score.language_id || "No data"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No data available yet.</p>
            )}
        </div>
    );
};

export default DetailedScore;
