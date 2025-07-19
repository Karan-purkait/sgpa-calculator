import React, { useState } from 'react';

export default function Home() { // Renamed from SgpaCalculator to Home
  const [semesters, setSemesters] = useState(0);
  const [sgpas, setSgpas] = useState([]);
  const [averageSgpa, setAverageSgpa] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const handleInputChange = (index, value) => {
    const newSgpas = [...sgpas];
    newSgpas[index] = parseFloat(value);
    setSgpas(newSgpas);
  };

  const calculate = () => {
    // Basic validation for input
    if (semesters === 0 || sgpas.some(isNaN) || sgpas.length !== semesters) {
      // Using a simple alert for now, consider a custom modal for better UX
      alert("Please enter valid SGPA for all semesters."); 
      return;
    }

    const totalSgpa = sgpas.reduce((sum, sgpa) => sum + sgpa, 0);
    const avgSgpa = totalSgpa / semesters;
    setAverageSgpa(avgSgpa.toFixed(2));

    // Common formula for percentage from SGPA (adjust if your institution uses a different one)
    const calculatedPercentage = (avgSgpa - 0.75) * 10;
    setPercentage(calculatedPercentage.toFixed(2));
  };

  return (
    // Note: The min-h-screen and gradient background are now handled by App.jsx's section wrapper.
    // This component focuses solely on its card content.
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        SGPA & Percentage Calculator
      </h1>

      <div className="mb-5">
        <label htmlFor="totalSemesters" className="block text-gray-700 text-sm font-semibold mb-2">
          Total Semesters:
        </label>
        <input
          id="totalSemesters"
          type="number"
          min="0"
          className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg p-3 w-full outline-none transition-all duration-200"
          onChange={(e) => {
            const num = parseInt(e.target.value);
            setSemesters(num > 0 ? num : 0); // Ensure number is not negative
            setSgpas(Array(num > 0 ? num : 0).fill(0));
            setAverageSgpa(null); // Reset results
            setPercentage(null); // Reset results
          }}
          placeholder="e.g., 8"
        />
      </div>

      {Array.from({ length: semesters }, (_, i) => (
        <div key={i} className="mb-4">
          <label htmlFor={`sgpa-${i}`} className="block text-gray-700 text-sm font-semibold mb-2">
            SGPA for Semester {i + 1}:
          </label>
          <input
            id={`sgpa-${i}`}
            type="number"
            step="0.01"
            min="0"
            max="10"
            className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg p-3 w-full outline-none transition-all duration-200"
            onChange={(e) => handleInputChange(i, e.target.value)}
            placeholder="e.g., 8.50"
          />
        </div>
      ))}

      <button
        onClick={calculate}
        className="mt-6 w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
      >
        Calculate
      </button>

      {averageSgpa && (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 text-center">
          <p className="text-lg text-gray-800 mb-2">
            <strong>Average SGPA:</strong> <span className="text-blue-700 font-extrabold text-xl">{averageSgpa}</span>
          </p>
          <p className="text-lg text-gray-800">
            <strong>Percentage:</strong> <span className="text-blue-700 font-extrabold text-xl">{percentage}%</span>
          </p>
        </div>
      )}
    </div>
  );
}
