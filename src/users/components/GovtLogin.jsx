import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';

function GovtLogin() {
  const [departmentalid, setDepartmentId] = useState('');
  const [password, setCreateDepartmentPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/v1/ministry/auth/login', {
        departmentalid,
        password
      });
      console.log(response.data);
      navigate(`/MinistryofRailways/${response.data.ministry.departmentalid}`);
      setDepartmentId('');
      setCreateDepartmentPassword('');
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Error logging in');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpClick = () => {
    setRedirectToSignUp(true);
  };

  if (redirectToSignUp) {
    return <Navigate to="/govt/signup" />;
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 relative">
      {/* Gradient Overlay (Indian Flag Colors) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.6) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(19, 136, 8, 0.6) 100%)',
        }}
      ></div>

      {/* Hardcoded Ashoka Chakra */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ opacity: 0.6 }} // Adjust opacity for a lighter effect
      >
        <div className="ashoka-chakra">
          <div className="circle"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
          <div className="spoke"></div>
        </div>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 z-20 relative">
        <h2 className="text-2xl font-bold text-center mb-4">Government Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Department ID"
            value={departmentalid}
            onChange={(e) => setDepartmentId(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Department Password"
            value={password}
            onChange={(e) => setCreateDepartmentPassword(e.target.value)}
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
          Doesn&apos;t have an account?{' '}
          <span
            onClick={handleSignUpClick}
            className="text-green-500 cursor-pointer"
          >
            Sign up
          </span>
        </p>
        <div>{error && <p className="text-red-500 mt-4">{error}</p>}</div>
      </div>

      {/* CSS for Ashoka Chakra */}
      <style>
        {`
          .ashoka-chakra {
            position: relative;
            width: 200px;
            height: 200px;
          }
          .circle {
            width: 100%;
            height: 100%;
            border: 3px solid #000080; /* Navy blue */
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
          }
          .spoke {
            width: 3px;
            height: 100%;
            background: #000080; /* Navy blue */
            position: absolute;
            top: 0;
            left: 50%;
            transform-origin: center;
          }
          .spoke:nth-child(2) { transform: rotate(15deg); }
          .spoke:nth-child(3) { transform: rotate(30deg); }
          .spoke:nth-child(4) { transform: rotate(45deg); }
          .spoke:nth-child(5) { transform: rotate(60deg); }
          .spoke:nth-child(6) { transform: rotate(75deg); }
          .spoke:nth-child(7) { transform: rotate(90deg); }
          .spoke:nth-child(8) { transform: rotate(105deg); }
          .spoke:nth-child(9) { transform: rotate(120deg); }
          .spoke:nth-child(10) { transform: rotate(135deg); }
          .spoke:nth-child(11) { transform: rotate(150deg); }
          .spoke:nth-child(12) { transform: rotate(165deg); }
        `}
      </style>
    </div>
  );
}

export default GovtLogin;