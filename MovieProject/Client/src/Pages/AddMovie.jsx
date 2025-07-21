import axios from 'axios';
import React, { useState } from 'react';

const BASEURL = import.meta.env.VITE_BASEURL;

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    releaseYear: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASEURL}/movie/create`, formData, { withCredentials: true });
      alert("Movie created successfully!");
      setFormData({ title: "", genre: "", director: "", releaseYear: "", description: "" });
    } catch (err) {
      alert("Error creating Movie data!");
      console.error(err);
    }
  };

  return (
    <div
      className="container mt-5 mb-5 p-4"
      style={{
        backgroundColor: '#1e293b', // dark slate background
        color: '#f8fafc', // light text
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      }}
    >
      <h2 className="mb-4 text-center" style={{ color: '#2dd4bf' }}>Add Movie</h2>

      <form onSubmit={handleSubmit} style={{ width: "50%", margin: "auto" }}>
        {["title", "genre", "director", "releaseYear"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label" style={{ color: '#94a3b8' }}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: '#334155',
                color: '#e2e8f0',
                border: '1px solid #475569',
              }}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="mb-3">
          <label className="form-label" style={{ color: '#94a3b8' }}>Description</label>
          <textarea
            className="form-control"
            rows="5"
            style={{
              backgroundColor: '#334155',
              color: '#e2e8f0',
              border: '1px solid #475569',
            }}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: '#14b8a6', // teal-500
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
