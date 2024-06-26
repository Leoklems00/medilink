// src/components/SignIn.js
import React from 'react';
import { useState } from "react";
import api from "../api";
import { Link } from 'react-router-dom'; // If using React Router for navigation
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
// import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

const SignIn = () => {
  const [email, setEmail] = useState("");
  // const [userData, setUserData] = useState({});
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // Handle sign-in logic here
    try { 
      console.log(email)
      api.post('/api/get-auth-data/', {email})
      .then(response =>  {
      const auth_data = response.data;
      if (auth_data.error) {
        navigate("/signin/")
      }
      else{
        const username = auth_data.username;
        // setUsername(username);
        console.log(username);

        const userData = {
          "username": username,
          "password": password,
        }
        // setUserData(userData);
        // const res = await api.post(route, { username, password })
        console.log(userData)
        api.post("/api/token/", userData)
        .then(response =>  {
          const data = response.data;
          console.log(data)
          localStorage.setItem(ACCESS_TOKEN, data.access);
          localStorage.setItem(REFRESH_TOKEN, data.refresh);
          const accessToken = data.access
          console.log(accessToken)
          
          navigate("/user-profile/")
  
        });
    
          // if (method === "login") {
              // localStorage.setItem(ACCESS_TOKEN, res.data.access);
              // localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
              
      }
      
      
    })

    // .catch (error => {
      .catch (error => {
        alert("please try again")
        // navigate("/signin/")
        
    });
   

    } catch (error) {
        // alert(error)
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-center">Welcome Back!</h2>
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {loading && <LoadingIndicator />}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          New to Medilink?{' '}
          <Link to="/signup" className="font-medium text-blue-500 hover:text-blue-600">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
