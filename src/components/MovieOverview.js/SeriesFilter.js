import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./overView.css";

const SeriesFilter = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sortBy, setSortBy] = useState({ value: "default", label: "Filter" });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjBiNWQyZGUwZmQ5MjNiZDdkMTMwYTQxMDUyMmRlNSIsInN1YiI6IjY1ODJlMTYzMTgwZGVhNTNmNDhiZGNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MliYsRAMawGSp_8OdKqsReySfZbNEr7t2TzTq7NZKEI",
          },
        };

        const responseMovies = await fetch(
          "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
          options
        );
        const dataMovies = await responseMovies.json();
        // const responsePopular = await fetch(
        //   "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        //   options
        // );
        // const dataPopular = await responsePopular.json();

        // Merge the results of both API calls into a single array
        setMovies([...dataMovies.results]);
        setFilteredMovies([...dataMovies.results]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  const sortOptions = [
    { value: "default", label: "Filter" },
    { value: "popularity", label: "Popularity" },
    { value: "release_date", label: "Release Date" },
    { value: "alphabetical", label: "Alphabetical" },
  ];

  const handleSortByChange = (selectedOption) => {
    setSortBy(selectedOption);
    if (selectedOption.value !== "default") {
      filterMovies(selectedOption.value);
    } else {
      setFilteredMovies(movies); // Reset to the original unfiltered list
    }
  };

  const filterMovies = (sortBy) => {
    let sortedMovies = [...movies];

    if (sortBy === "popularity") {
      sortedMovies.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === "release_date") {
      sortedMovies.sort(
        (a, b) => new Date(b.first_air_date) - new Date(a.first_air_date)
      );
    } else if (sortBy === "alphabetical") {
      sortedMovies.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredMovies(sortedMovies);
  };

  return (
    <div className="Movie-main-contianer">
      <div className="container-filter-head">
        <h1 style={{ color: "#FFF", marginLeft: "20px" }}>Series</h1>
        <div style={{ width: "200px", margin: "20px" }}>
          <Select
            className="custom-select"
            classNamePrefix="custom-select"
            options={sortOptions}
            value={sortBy}
            onChange={handleSortByChange}
            placeholder="Select Sorting Option"
            styles={{
              container: (provided) => ({
                ...provided,
                width: "100%",
                fontWeight: "bolder",
                fontFamily: "Poppins",
              }),
              control: (provided, state) => ({
                ...provided,
                backgroundColor: "#333",
                borderColor: "#333",
                boxShadow: state.isFocused ? null : "none",
                "&:hover": {
                  borderColor: "rgba(0, 0, 0, 0.3)",
                },
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                display: "none",
              }),
              dropdownIndicator: (provided, state) => ({
                ...provided,
                color: "#FFF",
                backgroundColor: "#555",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#fff",
              }),
              input: (provided) => ({
                ...provided,
                color: "#fff",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: "#555",
                borderRadius: "20px",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(97, 0, 194, 0.5)",
                },
              }),
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          padding: "20px",
          justifyContent: "center",
          color: "#FFF",
        }}
      >
        <div className="trending-div2">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="trending-item2">
              <Link
                to={`/Seriesoverview/${movie.id}/${encodeURIComponent(
                  movie.name
                )}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <div className="trending-item-info2">
                  <h3 style={{ fontSize: "18px" }}>
                    {movie.original_name || movie.name}
                  </h3>
                  <p style={{ fontSize: "12px" }}>{movie.first_air_date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesFilter;
