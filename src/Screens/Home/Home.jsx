import React from "react";
import "./Home.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Trending from "./Components/Trending/Trending";
const Home = () => {
  return (
    <div className="home__screen">
      <Topbar />
      <Navbar />
      <Trending />
    </div>
  );
};

export default Home;
