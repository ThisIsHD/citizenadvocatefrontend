import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSignUpClick = () => {
    setRedirectToSignUp(true);
  };

  if (redirectToSignUp) {
    return <Navigate to="/user/signup" />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">User Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Doesn't have an account?{' '}
          <span
            onClick={handleSignUpClick}
            className="text-blue-500 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;
