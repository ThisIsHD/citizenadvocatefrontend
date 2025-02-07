import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function GovtLogin() {
  const [deptId, setDeptId] = useState('');
  const [deptPassword, setDeptPassword] = useState('');
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement authentication logic here
    console.log('Department ID:', deptId);
    console.log('Password:', deptPassword);
  };

  const handleSignUpClick = () => {
    setRedirectToSignUp(true);
  };

  if (redirectToSignUp) {
    return <Navigate to="/govt/signup" />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Government Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Department ID"
            value={deptId}
            onChange={(e) => setDeptId(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Department Password"
            value={deptPassword}
            onChange={(e) => setDeptPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Doesn't have an account?{' '}
          <span
            onClick={handleSignUpClick}
            className="text-green-500 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default GovtLogin;
