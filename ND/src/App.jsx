import React from "react";
import "./App.css";

const Home = () => {
  const exploreDestinations = () => {
    alert("Explore feature coming soon!");
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1><b>WELCOME TO NAVIGATE DREAMS</b></h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#"><b>HOME</b></a></li>
            <li><a href="#"><b>EXPLORE</b></a></li>
            <li><a href="#"><b>LOGIN / SIGNUP</b></a></li>
            <li><a href="#"><b>ABOUT</b></a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Plan Your Next Adventure</h2>
        <p>Discover top destinations, create itineraries, and make your trips memorable.</p>
        <button className="explore-button" onClick={exploreDestinations}>
          Explore Now
        </button>
      </section>
    </div>
  );
};

export default Home;
