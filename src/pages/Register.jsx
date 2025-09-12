import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/slices/authSlice";
import AuthLayout from "../components/AuthLayout";

const Register = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    regNumber: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { register, isLoading, error, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-400">{error}</p>}

        <input
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          value={form.firstname}
          onChange={(e) => setForm({ ...form, firstname: e.target.value })}
        />

        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          value={form.lastname}
          onChange={(e) => setForm({ ...form, lastname: e.target.value })}
        />

        <input
          type="text"
          placeholder="Registration Number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          value={form.regNumber}
          onChange={(e) => setForm({ ...form, regNumber: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          disabled={isLoading}
          className="w-full bg-indigo-500 p-2 rounded text-white hover:bg-indigo-600"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p className="text-sm text-white text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
