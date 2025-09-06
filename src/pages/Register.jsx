import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import api from "../api/api"; // for posting registration details
import { setToken, fetchProfile } from "../store/slices/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setStatus("loading");
      setError(null);
      const { data } = await api.post("/auth/register", form);
      // save token and fetch profile
      dispatch(setToken(data.token));
      dispatch(fetchProfile());
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 p-4">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create Your Account
        </h2>

        {error && (
          <div className="bg-red-500/20 text-red-400 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                className="w-full px-3 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full px-3 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-3 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {status === "loading" ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-slate-400 mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:underline hover:text-blue-300"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
