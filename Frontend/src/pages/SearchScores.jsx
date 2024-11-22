import React, { useState } from "react";
import axios from "axios"
import DetailedScore from "../components/DetailedScore";

const SearchScores = () => {
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [score, setScore] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        if (!registrationNumber.trim()) {
            alert("Please enter a registration number.");
            return;
        }
    
        setLoading(true);
        setError(null);
    
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/scores/${registrationNumber}`);

            if (response.status === 200) {
                if (response.data) {
                    setScore(response.data);
                } else {
                    setError("No data available for the provided registration number.");
                }
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);  // Set error message từ response
            } else {
                setError("Failed to fetch scores. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="space-y-6 flex flex-col items-center">
            <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold mb-4">User Registration</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block mb-1">Registration Number:</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={registrationNumber}
                                onChange={(e) => setRegistrationNumber(e.target.value)}
                                placeholder="Enter registration number"
                                className="border rounded p-2 w-full"
                            />
                            <button
                                onClick={handleSubmit}
                                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Submit"}
                            </button>
                        </div>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                </div>
            </div>

            {/* Component DetailedScore */}
            <DetailedScore score={score} />
        </div>
    );
};

export default SearchScores;
