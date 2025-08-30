import React from "react";
import Profile from "../components/Profile";
import Artists from "../components/Artists";
import Tracks from "../components/Tracks";
import Logo from "../components/Logo";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Logo />
      <div className="boards">
        <div className="board profile-board">
          <h2>Profile</h2>
          <Profile />
        </div>
        <div className="board artists-board">
          <h2>Top Artists</h2>
          <Artists />
        </div>
        <div className="board tracks-board">
          <h2>Top Tracks</h2>
          <Tracks />
        </div>
      </div>
    </div>
  );
};

export default Home;
