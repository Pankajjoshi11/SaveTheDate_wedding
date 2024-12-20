import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";

export default function HostLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate here

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://savethedate-wedding.onrender.com/api/hosts/login", {
        email,
        password,
      });
  
      console.log(response.data); // Log the response to inspect it
  
      // Store the token and host information in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("hostName", response.data.host.name); // Store the host name
  
      // Extract host ID from the response
      const hostId = response.data.host.id; // Access the host ID correctly
      if (hostId) {
        navigate(`/host/${hostId}/main`); // Navigate to the host main page with the host ID
        toast.success("Login successful!");
      } else {
        throw new Error("Host ID not found in response.");
      }
    } catch (err) {
      const message = err.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Login as Host</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex">
            <p className="">Don't have an account?</p>
            <Link to='/host/register' className="ml-1 text-blue-500"> Register</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
