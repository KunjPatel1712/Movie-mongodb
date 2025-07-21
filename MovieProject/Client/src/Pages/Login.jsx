import axios from "axios";
import React from "react";

const BASEURL = import.meta.env.VITE_BASEURL;

const Login = () => {
  const [formData, setformData] = React.useState({});

  const handleChange = (e) => {
    setformData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASEURL}/auth/login`, formData ,{
        withCredentials: true, // this is used when a backend requires cookies for authentication
      });
      console.log("Login successful:", res.data);
      localStorage.setItem("currentUser", JSON.stringify(res?.data?.user));
      alert("Login successful");
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert("There was an error logging in!");
    }
  };

  return (
  <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#0f172a" }}>
  <div className="p-4 rounded shadow w-100" style={{ maxWidth: "400px", backgroundColor: "#1e293b", color: "#f1f5f9" }}>
    <h2 className="text-center mb-4" style={{ color: "#14b8a6" }}>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          style={{ backgroundColor: "#334155", color: "#f1f5f9", border: "none" }}
          onChange={handleChange}
          value={formData.email || ""}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          style={{ backgroundColor: "#334155", color: "#f1f5f9", border: "none" }}
          onChange={handleChange}
          value={formData.password || ""}
          required
        />
      </div>
      <button type="submit" className="btn w-100" style={{ backgroundColor: "#14b8a6", color: "white" }}>
        Submit
      </button>
    </form>
  </div>
</div>

  );
};

export default Login;
