import { useState } from "react";
import React from "react";
import "./MHome.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import dumy from "../../assests/imgsecond.png";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Footer from "./Footer";

import SearchResultPage from "./SerachResultPage";
const MovieHome = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleToggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    if (searchQuery === "") {
      setSearchResults([]);
    }
  };

  const handleSerachClick = async () => {
    if (searchQuery === "") return;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjBiNWQyZGUwZmQ5MjNiZDdkMTMwYTQxMDUyMmRlNSIsInN1YiI6IjY1ODJlMTYzMTgwZGVhNTNmNDhiZGNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MliYsRAMawGSp_8OdKqsReySfZbNEr7t2TzTq7NZKEI",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearchResults(response.results))
      .catch((err) => console.error(err));
    // try {
    //   const response = await axios.request(apiOptions);
    //   setSearchResults(response.data.titleResults.results || []);
    // } catch (error) {
    //   console.error("Error fetching data from IMDb API:", error);
    //   // Handle errors, e.g., display an error message to the user
    // }
  };
  const Clearserach = () => {
    setSearchQuery("");
  };

  return (
    <div
      style={{
        backgroundColor: "#21201E",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="MHome-container" style={{ flex: "0.3" }}>
        <header className="header-1">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="menu-bar">
              {!drawerOpen ? (
                <IconButton
                  style={{ backgroundColor: "transparent" }}
                  onClick={handleToggleDrawer}
                >
                  <MenuIcon style={{ color: "#FFF" }} />
                </IconButton>
              ) : (
                <div className="icon-only">
                  <IconButton
                    style={{ margin: "10px" }}
                    onClick={handleToggleDrawer}
                  >
                    <CloseIcon style={{ color: "#FFF" }} />
                  </IconButton>
                </div>
              )}
            </div>
            {drawerOpen && <Sidebar onClose={handleToggleDrawer} />}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="#6100C2"
              className="svg-that-hide"
              style={{ margin: "10px" }}
            >
              <path
                d="M24 10.6667H25.3333C26.7478 10.6667 28.1044 11.2287 29.1046 12.2288C30.1048 13.229 30.6667 14.5856 30.6667 16.0001C30.6667 17.4146 30.1048 18.7711 29.1046 19.7713C28.1044 20.7715 26.7478 21.3334 25.3333 21.3334H24"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66666 10.6667H24V22.6667C24 24.0812 23.4381 25.4378 22.4379 26.438C21.4377 27.4382 20.0812 28.0001 18.6667 28.0001H8C6.58551 28.0001 5.22896 27.4382 4.22876 26.438C3.22857 25.4378 2.66666 24.0812 2.66666 22.6667V10.6667Z"
                fill="white"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 1.33325V5.33325"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3333 1.33325V5.33325"
                stroke="#7900C2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.6667 1.33325V5.33325"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span
              style={{
                color: "#FFF",
                fontSize: "2rem",
                margin: "10px 20px",
              }}
            >
              {" "}
              WATCHFLIX
            </span>
          </div>

          <div className="Nav-container">
            <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Home
            </Link>

            <Link
              to={"/Movies"}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Movie
            </Link>

            <Link
              to={"/Series"}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Series
            </Link>
          </div>

          <div class="search-bar">
            <input
              type="text"
              class="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button class="search-button" onClick={handleSerachClick}>
              <span class="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="mobile-bar">
            {!searchOpen ? (
              <IconButton onClick={handleToggleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </IconButton>
            ) : (
              <IconButton
                style={{ margin: "10px" }}
                onClick={handleToggleSearch}
              >
                <CloseIcon style={{ color: "#FFF" }} />
              </IconButton>
            )}

            {searchOpen && (
              <div class="mobile-search-bar">
                <input
                  type="text"
                  class="search-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <button class="search-button" onClick={handleSerachClick}>
                  <span class="search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 21L16.65 16.65"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </div>
          <div className="profile-dropdown">
            <button className="profile-button1" onClick={handleToggleDropdown}>
              <img
                src={dumy}
                alt="Profile"
                width="32"
                height="32"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </button>

            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="#profile">Profile</a>

                <a href="#logout">Logout</a>
              </div>
            )}
          </div>
        </header>
      </div>
      {searchQuery !== "" && (
        <SearchResultPage movies={searchResults} clearserach={Clearserach} />
      )}
      <div className="content-main" style={{ flex: 0.7, overflowY: "auto" }}>
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MovieHome;
