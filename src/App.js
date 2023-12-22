import "./App.css";
import Login from "./components/Authentication/Login";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Authentication/SignUp";
import MovieHome from "./components/MoviepagesHeader/MovieHome";
import MovieContentPage from "./components/MoviepagesHeader/MovieContentPage";
import OverviewPage from "./components/MovieOverview.js/OverviewPage";
import MovieFilter from "./components/MovieOverview.js/MovieFilter";
import SeriesFilter from "./components/MovieOverview.js/SeriesFilter";
import SeriesOverviewPage from "./components/MovieOverview.js/SeriesOverviewpage";
function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <MovieHome>
              <MovieContentPage />
            </MovieHome>
          }
        />
        <Route
          path="/overview/:id/:title"
          element={
            <MovieHome>
              <OverviewPage />
            </MovieHome>
          }
        />
        <Route
          path="/Seriesoverview/:id/:title"
          element={
            <MovieHome>
              <SeriesOverviewPage />
            </MovieHome>
          }
        />
        <Route
          path="/Movies"
          element={
            <MovieHome>
              <MovieFilter />
            </MovieHome>
          }
        />
        <Route
          path="/Series"
          element={
            <MovieHome>
              <SeriesFilter />
            </MovieHome>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
