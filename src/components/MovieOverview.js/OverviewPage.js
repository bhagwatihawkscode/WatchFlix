import React, { useEffect, useState } from "react";
import "./overView.css";
import { useParams } from "react-router-dom";
import VideoPlayer from "../MoviepagesHeader/VideoPlayer";
const OverviewPage = () => {
  const { id, title } = useParams();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjBiNWQyZGUwZmQ5MjNiZDdkMTMwYTQxMDUyMmRlNSIsInN1YiI6IjY1ODJlMTYzMTgwZGVhNTNmNDhiZGNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MliYsRAMawGSp_8OdKqsReySfZbNEr7t2TzTq7NZKEI",
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, [id, title]);

  return (
    <div className="overview-container">
      <h1 style={{ fontSize: "36px", color: "#FFF" }}>Overview</h1>

      <div
        className="about-conatainer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieData.backdrop_path})`,
        }}
      >
        <div className="about-inner-conatiner">
          <div
            className="abut-innei-in"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "24px" }}>
              {movieData.title}
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "14px",

                padding: "5px",
              }}
            >
              {movieData.overview}
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "14px",

                padding: "5px",
              }}
            >
              {movieData.status}
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "14px",

                padding: "5px",
              }}
            >
              {movieData.genres &&
                movieData.genres.map((genre) => (
                  <span
                    style={{ marginRight: "5px" }}
                    key={genre.id}
                    className="genre-item"
                  >
                    {genre.name}
                  </span>
                ))}
            </p>

            <p
              style={{
                fontWeight: "bold",
                fontSize: "14px",

                padding: "5px",
              }}
            >
              {" "}
              Release Date : {movieData.release_date}
            </p>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.original_title}
              height={"400px"}
            />
          </div>
        </div>
      </div>
      <div className="poster-outer-container">
        <p style={{ fontWeight: "bold", fontSize: "24px", color: "white" }}>
          Trailer
        </p>
        <div className="playera-poster-container">
          <VideoPlayer initialMovieName={movieData.original_title} id={id} />
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.original_title}
            height={"400px"}
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
