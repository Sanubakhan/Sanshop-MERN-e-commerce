import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OwnerLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://localhost:3000/api/auth/owner/login",
        form,
        { withCredentials: true }
      );

      navigate("/owner/dashboard");
    } catch (err) {
      setError("Access denied");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 opacity-80" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-sm bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-xl p-8 shadow-2xl"
      >
        {/* Title */}
        <h1 className="text-white text-2xl font-semibold tracking-wide mb-2">
          Restricted
        </h1>
        <p className="text-xs text-neutral-400 mb-8">
          Authorized access only
        </p>

        {error && (
          <p className="text-xs text-red-400 mb-4 tracking-wide">
            {error}
          </p>
        )}

        {/* Email */}
        <div className="mb-5">
          <label className="block text-xs text-neutral-400 mb-1">
            Identity
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="owner@domain"
            required
            className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-xs text-neutral-400 mb-1">
            Key
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            className="w-full bg-transparent border border-neutral-700 rounded-md px-3 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black py-2 rounded-md text-sm font-medium tracking-wide hover:bg-neutral-200 transition disabled:opacity-60"
        >
          {loading ? "Verifying…" : "Enter"}
        </button>

        {/* subtle footer */}
        <p className="mt-6 text-[10px] text-neutral-500 tracking-widest text-center">
          SANSHOP · INTERNAL
        </p>
      </form>
    </div>
  );
};

export default OwnerLogin;
