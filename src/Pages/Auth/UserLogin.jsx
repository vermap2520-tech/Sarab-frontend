import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function UserLogin() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/users/userlogin",
        user,
      );
      toast.success(res.data.message || "Login successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/userRegister">Register</Link>
        </p>
      </div>
    </div>
  );
}
