import axios from 'axios';
import React from 'react';

const BASEURL = import.meta.env.VITE_BASEURL;

const Register = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASEURL}/auth/register`, formData);
      alert("Registration successful");
      window.location.href = '/login';
    } catch (error) {
      alert("There was an error in registration!");
      console.error(error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#0f172a' }}>
      <div className="p-4 rounded shadow w-100" style={{ maxWidth: '400px', backgroundColor: '#1e293b', color: '#f1f5f9' }}>
        <h2 className="text-center mb-4" style={{ color: '#38bdf8' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-info"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-info"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-info"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-info w-100 text-dark fw-bold">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
