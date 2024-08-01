// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("http://localhost:5000/api/auth/me", {
            headers: {
              "x-auth-token": token,
            },
          });
          setUser(res.data);
        } catch (err) {
          console.error(err.response.data);
        }
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-xl font-semibold text-red-600">
          Please log in to view your dashboard
        </h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="text-lg">
          Welcome,{" "}
          <span className="font-semibold text-indigo-600">{user.username}</span>
          !
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
