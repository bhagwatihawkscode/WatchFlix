import React, { useState, useEffect } from "react";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
const MovieContentPage = () => {
  const [movies, setMovies] = useState([]);
  const [Upcoming, SetUpcoming] = useState([]);
  const [popular, setpopular] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjBiNWQyZGUwZmQ5MjNiZDdkMTMwYTQxMDUyMmRlNSIsInN1YiI6IjY1ODJlMTYzMTgwZGVhNTNmNDhiZGNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MliYsRAMawGSp_8OdKqsReySfZbNEr7t2TzTq7NZKEI",
          },
        };

        fetch(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          options
        )
          .then((response) => response.json())
          .then((response) => setMovies(response.results))
          .catch((err) => console.error(err));
        const options1 = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjBiNWQyZGUwZmQ5MjNiZDdkMTMwYTQxMDUyMmRlNSIsInN1YiI6IjY1ODJlMTYzMTgwZGVhNTNmNDhiZGNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MliYsRAMawGSp_8OdKqsReySfZbNEr7t2TzTq7NZKEI",
          },
        };

        fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          options1
        )
          .then((response) => response.json())
          .then((response) => setpopular(response.results))
          .catch((err) => console.error(err));

        const options3 = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjBiNWQyZGUwZmQ5MjNiZDdkMTMwYTQxMDUyMmRlNSIsInN1YiI6IjY1ODJlMTYzMTgwZGVhNTNmNDhiZGNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MliYsRAMawGSp_8OdKqsReySfZbNEr7t2TzTq7NZKEI",
          },
        };

        fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          options3
        )
          .then((response) => response.json())
          .then((response) => SetUpcoming(response.results))
          .catch((err) => console.error(err));
        const options4 = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjBiNWQyZGUwZmQ5MjNiZDdkMTMwYTQxMDUyMmRlNSIsInN1YiI6IjY1ODJlMTYzMTgwZGVhNTNmNDhiZGNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MliYsRAMawGSp_8OdKqsReySfZbNEr7t2TzTq7NZKEI",
          },
        };

        fetch(
          "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
          options4
        )
          .then((response) => response.json())
          .then((response) => setSeries(response.results))
          .catch((err) => console.error(err));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const shuffleMovies = (movies) => {
    if (movies.length < 2) {
      return null;
    }

    // Create a copy of the movies array to avoid modifying the original array
    const shuffledMovies = [...movies];

    // Shuffle the array
    shuffleArray(shuffledMovies);

    return shuffledMovies;
  };

  // Example usage
  const randomMovies = shuffleMovies(movies);

  return (
    <>
      <div className="content-page-container">
        <div className="two-main-divcontainer">
          {randomMovies &&
            randomMovies.map((randomMovie) => (
              <div className="baner-contain" key={randomMovie.id}>
                <img
                  alt={randomMovie.id}
                  src={`https://image.tmdb.org/t/p/w500${randomMovie.backdrop_path}`}
                />
                <div className="baner-upper-container ">
                  <div>
                    <p
                      style={{
                        color: "#FFF",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {randomMovie.title}
                    </p>
                    <p style={{ color: "#FFF", fontSize: "10px" }}>
                      {randomMovie.release_date}
                    </p>
                  </div>
                  <div className="play-btn-div-con">
                    <Link
                      to={`/overview/${randomMovie.id}/${encodeURIComponent(
                        randomMovie.title
                      )}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <IconButton>
                        <PlayCircleOutlineRoundedIcon
                          style={{ color: "#FFF" }}
                        />
                      </IconButton>
                      <span style={{ color: "#FFF" }}>Watch now</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(97, 0, 194, 0.3)",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#FFF" }}>Latest</h1>
        <div className="tranding-div">
          {Upcoming.map((movie) => (
            <div key={movie.id} className="trending-item">
              <Link
                to={`/overview/${movie.id}/${encodeURIComponent(movie.title)}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <div className="trending-item-info">
                  <h3 style={{ fontSize: "18px" }}>
                    {movie.title || movie.name}
                  </h3>
                  <p style={{ fontSize: "12px" }}>{movie.release_date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(97, 0, 194, 0.3)",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#FFF" }}>Trending</h1>
        <div className="tranding-div">
          {movies.map((movie) => (
            <div key={movie.id} className="trending-item">
              <Link
                to={`/overview/${movie.id}/${encodeURIComponent(movie.title)}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <div className="trending-item-info">
                  <h3 style={{ fontSize: "18px" }}>
                    {movie.title || movie.name}
                  </h3>
                  <p style={{ fontSize: "12px" }}>{movie.release_date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(97, 0, 194, 0.3)",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#FFF" }}>Series</h1>
        <div className="tranding-div">
          {series.map((movie) => (
            <div key={movie.id} className="trending-item">
              <Link
                to={`/Seriesoverview/${movie.id}/${encodeURIComponent(
                  movie.title
                )}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <div className="trending-item-info">
                  <h3 style={{ fontSize: "18px" }}>
                    {movie.title || movie.name}
                  </h3>
                  <p style={{ fontSize: "12px" }}>{movie.release_date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(97, 0, 194, 0.3)",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#FFF" }}>Popular</h1>
        <div className="tranding-div">
          {popular.map((movie) => (
            <div key={movie.id} className="trending-item">
              <Link
                to={`/overview/${movie.id}/${encodeURIComponent(movie.title)}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <div className="trending-item-info">
                  <h3 style={{ fontSize: "18px" }}>
                    {movie.title || movie.name}
                  </h3>
                  <p style={{ fontSize: "12px" }}>{movie.release_date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieContentPage;
