import React, { useState } from 'react';
import { userInstance } from '../axios'; // Ensure this is properly configured
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userInstance.post('/login', { email, password });
      localStorage.setItem('authToken', response.data.token);
      navigate('/api/blog');
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fff]">
      <div className="p-16 rounded-xl shadow-lg bg-[#243642] w-1/3">
        <h2 className="text-4xl font-extrabold text-center text-[#FFB200] mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-lg font-medium text-white">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-white">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold bg-[#FFB200] text-white rounded-lg hover:bg-[#4575ff] transition-all"
          >
            Login
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-lg text-white">
            Don't have an account?{' '}
            <a href="/user/signup" className="hover:text-[#4575ff] font-bold underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;  