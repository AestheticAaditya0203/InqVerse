"use client"; 
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here

    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="Your Username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-500"
              placeholder="Your Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-full w-32"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
