import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function UserRegister() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.fullname ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/users/userRegister",
        {
          fullname: user.fullname,
          email: user.email,
          password: user.password,
        },
      );
      toast.success(res.data.message || "Registration successfull");

      setUser({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/userlogin");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-header">
          <h1>Create Account</h1>
          <p>Register to continue shopping</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <input
            className="register-input"
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            value={user.fullname}
            onChange={handleChange}
          />

          <input
            className="register-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            className="register-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
          />

          <input
            className="register-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={user.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/userlogin">Login</Link>
        </p>
      </div>
    </div>
  );
}
