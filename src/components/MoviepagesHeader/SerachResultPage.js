import React from "react";
import { Link } from "react-router-dom";

const SearchResultPage = ({ movies, clearserach }) => {
  const linkclick = () => {
    clearserach();
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(97, 0, 194, 0.3)",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#FFF" }}>Search</h1>
        <div className="tranding-div">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="trending-item">
                <Link
                  to={`/overview/${movie.id}/${encodeURIComponent(
                    movie.title
                  )}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={linkclick}
                >
                  ``
                  {movie.poster_path !== null ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.original_title}
                    />
                  ) : (
                    <img
                      src="https://via.placeholder.com/250x300.png/a59090/000000?Text=300x300"
                      alt="Placeholder"
                    />
                  )}
                  <div className="trending-item-info">
                    <h3 style={{ fontSize: "18px" }}>
                      {" "}
                      {movie.title || movie.name}
                    </h3>
                    <p style={{ fontSize: "12px" }}>{movie.release_date}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p style={{ color: "#FFF", textAlign: "center" }}>
              No Data Available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
