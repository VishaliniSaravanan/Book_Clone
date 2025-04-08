import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Ensure responsiveness styles are added here

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState('Your Location');
  const navigate = useNavigate();

  const locations = ['Mumbai', 'Hyderabad', 'Madurai', 'Kolkata', 'Chennai', 'Pune', 'Kochi'];

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    console.log(`Selected location: ${location}`);
  };

  const handleSignIn = () => navigate('/login');
  const handleListYourShowClick = () => navigate('/event-cards');
  const handleGiftCardsClick = () => navigate('/gift-cards');
  const handleMoviesClick = () => navigate('/');

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://latestlogo.com/wp-content/uploads/2024/03/bookmyshow.svg"
              alt="BookMyShow"
              className="header-logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <form className="d-flex flex-grow-1 mx-3 my-2 my-lg-0">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                aria-label="Search"
              />
            </form>

            <div className="dropdown me-3 my-2 my-lg-0">
              <button
                className="btn btn-white dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedLocation}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {locations.map((location) => (
                  <li key={location}>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleLocationChange(location)}
                    >
                      {location}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="btn btn-danger my-2 my-lg-0"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <div className="gray-menu py-2">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <div className="menu-left d-flex flex-wrap gap-3">
            {['Movies', 'Stream', 'Events', 'Plays', 'Sports', 'Activities'].map((item) => (
              <a
                key={item}
                onClick={item === 'Movies' ? handleMoviesClick : undefined}
                className="menu-link"
                style={{ cursor: 'pointer' }}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="menu-right d-flex flex-wrap gap-3">
            <a onClick={handleListYourShowClick} className="menu-link" style={{ cursor: 'pointer' }}>
              ListYourShow
            </a>
            {['Corporates', 'Offers'].map((item) => (
              <a key={item} className="menu-link" href="#">
                {item}
              </a>
            ))}
            <a onClick={handleGiftCardsClick} className="menu-link" style={{ cursor: 'pointer' }}>
              Gift Cards
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
