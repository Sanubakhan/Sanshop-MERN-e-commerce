import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OwnerRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    ownername: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://localhost:3000/api/auth/owner/register",
        {
          ownername: form.ownername,
          email: form.email,
          phoneNumber: form.phoneNumber,
          password: form.password,
        },
        { withCredentials: true }
      );

      navigate("/owner/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Owner registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-8"
      >
        <h2 className="text-white text-2xl font-semibold mb-1">
          Initialization
        </h2>
        <p className="text-xs text-neutral-400 mb-6">
          Internal owner setup
        </p>

        {error && (
          <p className="text-xs text-red-400 mb-4">{error}</p>
        )}

        {/* Owner Name */}
        <div className="mb-4">
          <label className="block text-xs text-neutral-400 mb-1">
            Owner Name
          </label>
          <input
            type="text"
            name="ownername"
            value={form.ownername}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-neutral-700 rounded px-3 py-2 text-white text-sm"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-xs text-neutral-400 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-neutral-700 rounded px-3 py-2 text-white text-sm"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-xs text-neutral-400 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-neutral-700 rounded px-3 py-2 text-white text-sm"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-xs text-neutral-400 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-neutral-700 rounded px-3 py-2 text-white text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black py-2 rounded font-medium text-sm disabled:opacity-60"
        >
          {loading ? "Creating…" : "Create Owner"}
        </button>

        <p className="mt-6 text-[10px] text-neutral-500 text-center tracking-widest">
          SANSHOP · OWNER SETUP
        </p>
      </form>
    </div>
  );
};

export default OwnerRegister;
