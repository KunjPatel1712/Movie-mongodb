import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is imported
 // Adjust based on your actual path

const MovieCard = ({ movieId, title, genre, director, releaseYear, description, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASEURL}/movie/deleteMovie/${movieId}`, {
        withCredentials: true,
      });
      alert("Movie deleted successfully!");
      onDelete?.();
    } catch (error) {
      console.error("Failed to delete movie:", error);
      alert("Failed to delete movie.");
    }
  };

  const handleUpdate = () => {
    navigate(`/update/${movieId}`, {
      state: {
        title,
        genre,
        director,
        releaseYear,
        description,
      },
    });
  };

  return (
    <div
      className="card shadow border-0 mb-4"
      style={{
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#1e293b", // slate-800
        color: "#f1f5f9", // slate-100
        borderRadius: "12px",
      }}
    >
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#14b8a6" /* teal-500 */ }}>{title}</h5>
        <h6 className="card-subtitle mb-2" style={{ color: "#94a3b8" /* slate-400 */ }}>
          {genre} | {releaseYear}
        </h6>
        <p className="card-text">
          <strong style={{ color: "#22d3ee" /* cyan-400 */ }}>Director:</strong> {director}
        </p>
        <p className="card-text">{description}</p>
        <div className="d-grid gap-2">
          <button
            onClick={handleDelete}
            className="btn"
            style={{
              backgroundColor: "#ef4444", // red-500
              color: "#fff",
              border: "none",
            }}
          >
            Delete Movie
          </button>
          <button
            onClick={handleUpdate}
            className="btn"
            style={{
              backgroundColor: "#10b981", // emerald-500
              color: "#fff",
              border: "none",
            }}
          >
            Update Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
