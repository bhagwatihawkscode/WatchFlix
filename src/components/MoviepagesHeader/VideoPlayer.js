import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import "../MovieOverview.js/overView.css";

const VideoPlayer = ({ initialMovieName, id, series }) => {
  const [videoURL, setVideoURL] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (series === true) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/tv/${id}/videos?api_key=69d66957eebff9666ea46bd464773cf0`
          );
          const data = await response.json();
          const trailerKeys = data.results
            .filter((result) => result.type.toLowerCase().includes("trailer"))
            .map((result) => result.key);

          setVideoURL(`https://www.youtube.com/watch?v=${trailerKeys}`);
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      } else {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=69d66957eebff9666ea46bd464773cf0`
          );
          const data = await response.json();
          const trailerKeys = data.results
            .filter((result) => result.type.toLowerCase().includes("trailer"))
            .map((result) => result.key);

          setVideoURL(`https://www.youtube.com/watch?v=${trailerKeys}`);
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      }
    }
    fetchData();
  }, [initialMovieName, series, id]);

  return (
    <div className="player-container">
      {videoURL !== null ? (
        <ReactPlayer className={"video-set"} url={videoURL} controls={true} />
      ) : (
        <p
          style={{
            color: "#FFF",
            marginRight: "40px",
            fontWeight: "bolder",
            fontSize: "40px",
          }}
        >
          Trailer not available
        </p>
      )}
    </div>
  );
};

export default VideoPlayer;
