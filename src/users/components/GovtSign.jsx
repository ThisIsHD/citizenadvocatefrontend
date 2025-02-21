import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GovtSign() {
  const navigate = useNavigate();
  const [departmentalname, setDepartmentName] = useState('');
  const [departmentalid, setDepartmentId] = useState('');
  const [password, setCreateDepartmentPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/v1/ministry/auth/signup', {
        departmentalname,
        departmentalid,
        password
      });
      console.log(response.data);
      navigate('/govt/login');

      setDepartmentName('');
      setDepartmentId('');
      setCreateDepartmentPassword('');
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Error signing up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 relative">
      {/* Gradient Overlay (Indian Flag Colors) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.6) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(19, 136, 8, 0.6) 100%)',
        }}
      ></div>

      {/* Sign Up Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 z-20 relative">
        <h2 className="text-2xl font-bold text-center mb-4">Government Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Department Name"
            value={departmentalname}
            onChange={(e) => setDepartmentName(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Department ID"
            value={departmentalid}
            onChange={(e) => setDepartmentId(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Create Department Password"
            value={password}
            onChange={(e) => setCreateDepartmentPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className={`w-full py-2 text-white rounded ${loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'}`}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          {error && <div className="text-red-600 mt-2 text-center">{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default GovtSign;