import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";

const BASEURL = import.meta.env.VITE_BASEURL;

const UpdateMovie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    director: "",
    releaseYear: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (location.state) {
      setFormData(location.state);
    } else {
      const fetchMovie = async () => {
        try {
          const res = await axios.get(`${BASEURL}/movie/getMovie/${movieId}`, {
            withCredentials: true,
          });
          setFormData(res.data);
        } catch (err) {
          console.error(err);
          setError("Failed to fetch movie details");
        }
      };

      fetchMovie();
    }
  }, [movieId, location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await axios.put(`${BASEURL}/movie/updateMovie/${movieId}`, formData, {
        withCredentials: true,
      });
      setSuccessMsg("Movie updated successfully!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
   <Container className="mt-5" style={{ backgroundColor: "#0f172a", color: "#f1f5f9", padding: "2rem", borderRadius: "12px" }}>
  <h2 className="mb-4 text-center" style={{ color: "#14b8a6" }}>Update Movie</h2>

  {error && <Alert variant="danger">{error}</Alert>}
  {successMsg && <Alert variant="success">{successMsg}</Alert>}

  <Form onSubmit={handleSubmit}>
    {["title", "genre", "director", "releaseYear", "description"].map((field, idx) => (
      <Form.Group className="mb-3" controlId={field} key={idx}>
        <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
        {field === "description" ? (
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ backgroundColor: "#334155", color: "#f1f5f9", border: "none" }}
            required
          />
        ) : (
          <Form.Control
            type={field === "releaseYear" ? "number" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            style={{ backgroundColor: "#334155", color: "#f1f5f9", border: "none" }}
            required
          />
        )}
      </Form.Group>
    ))}

    <Button type="submit" disabled={loading} style={{ backgroundColor: "#14b8a6", border: "none" }}>
      {loading ? "Updating..." : "Update Movie"}
    </Button>
  </Form>
</Container>

  );
};

export default UpdateMovie;
