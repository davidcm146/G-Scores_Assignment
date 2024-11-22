import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Bar, Pie } from 'react-chartjs-2'; // Import both Bar and Pie components
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Đăng ký các module Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Reports = () => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartType, setChartType] = useState('bar')

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/report`)
        if (response.status === 200) {
          setReportData(response.data.data); // Set the report data
        }
      } catch (error) {
        setError('Failed to fetch report. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    fetchReport();
  }, [])

  const chartData = {
    labels: ['>= 8', '6 - 8', '4 - 6', '< 4'],
    datasets: [
      {
        label: 'Number of Students',
        data: reportData ? [
          reportData['>= 8'],
          reportData['6 - 8'],
          reportData['4 - 6'],
          reportData['< 4'],
        ] : [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Student Score Report',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Score Range',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
        },
        beginAtZero: true,
      },
    },
  };

  const pieData = {
    labels: ['>= 8', '6 - 8', '4 - 6', '< 4'],
    datasets: [
      {
        data: reportData ? [
          reportData['>= 8'],
          reportData['6 - 8'],
          reportData['4 - 6'],
          reportData['< 4'],
        ] : [],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Student Score Distribution',
      },
    },
  };

  if (error) return <div className="text-red-600">{error}</div>
  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6 w-full bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Score Report</h2>
      {/* Button to toggle between bar and pie chart */}
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={() => setChartType('bar')}
        >
          Bar Chart
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setChartType('pie')}
        >
          Pie Chart
        </button>
      </div>

      <div className="flex justify-center items-center" style={{ height: '515px' }}>
        <div style={{ width: chartType === 'bar' ? '700px' : '500px', height: chartType === 'bar' ? '500px' : '500px' }}>
          {chartType === 'bar' ? (
            <Bar data={chartData} options={chartOptions} />
          ) : (
            <Pie data={pieData} options={pieOptions} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Reports