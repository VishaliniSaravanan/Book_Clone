import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Add Header-specific styles

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState('Your Location');
  const navigate = useNavigate();

  const locations = ['Mumbai', 'Hyderabad', 'Madurai', 'Kolkata', 'Chennai', 'Pune', 'Kochi'];

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    console.log(`Selected location: ${location}`);
  };

  const handleSignIn = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleListYourShowClick = () => {
    navigate('/event-cards'); // Navigate to the EventCards page
  };

  const handleGiftCardsClick = () => {
    navigate('/gift-cards'); // Navigate to the Gift Cards page
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://latestlogo.com/wp-content/uploads/2024/03/bookmyshow.svg"
              alt="BookMyShow"
            />
          </a>

          <form className="d-flex flex-grow-1 mx-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              aria-label="Search"
            />
          </form>

          <div className="dropdown me-3">
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
            className="btn btn-danger"
            style={{ textDecoration: 'none', color: 'white' }}
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </nav>

      <div className="gray-menu">
        <div className="container d-flex justify-content-between">
          <div>
            {['Movies', 'Stream', 'Events', 'Plays', 'Sports', 'Activities'].map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <div>
            <a onClick={handleListYourShowClick} style={{ cursor: 'pointer' }}>
              ListYourShow
            </a>
            {['Corporates', 'Offers'].map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
            <a onClick={() => navigate('/gift-cards')} style={{ cursor: 'pointer' }}>
  Gift Cards
</a>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
