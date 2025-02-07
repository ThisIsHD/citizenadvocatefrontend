// src/pages/GovtSign.js
import { useState } from 'react';

function GovtSign() {
  const [departmentName, setDepartmentName] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [createDepartmentPassword, setCreateDepartmentPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here
    console.log('Department Name:', departmentName);
    console.log('Department ID:', departmentId);
    console.log('Create Department Password:', createDepartmentPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Government Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Department ID"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Create Department Password"
            value={createDepartmentPassword}
            onChange={(e) => setCreateDepartmentPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default GovtSign;
