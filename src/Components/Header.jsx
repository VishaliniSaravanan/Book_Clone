import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState('Your Location');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const locations = ['Mumbai', 'Hyderabad', 'Madurai', 'Kolkata', 'Chennai', 'Pune', 'Kochi'];
  const navLinks = [
    { label: 'Movies', onClick: () => navigate('/') },
    { label: 'Stream' },
    { label: 'Events' },
    { label: 'Plays' },
    { label: 'Sports' },
    { label: 'Activities' },
    { label: 'ListYourShow', onClick: () => navigate('/event-cards') },
    { label: 'Corporates' },
    { label: 'Offers' },
    { label: 'Gift Cards', onClick: () => navigate('/gift-cards') },
  ];

  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-white shadow-sm">
          <div className="container-fluid d-flex align-items-center gap-3 desktop-header">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img src="https://latestlogo.com/wp-content/uploads/2024/03/bookmyshow.svg" alt="BookMyShow" />
            </a>

            {/* Search Bar */}
            <input
              className="form-control"
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              aria-label="Search"
            />

            {/* Location Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedLocation}
              </button>
              <ul className="dropdown-menu">
                {locations.map((location) => (
                  <li key={location}>
                    <button
                      className="dropdown-item"
                      onClick={() => setSelectedLocation(location)}
                    >
                      {location}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sign In Button */}
            <button className="btn btn-danger" onClick={() => navigate('/login')}>
              Sign In
            </button>

            {/* Hamburger for Mobile */}
            <div className="mobile-only">
              <button className="btn btn-outline-secondary hamburger-btn" onClick={() => setDrawerOpen(true)}>
                &#9776;
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`side-drawer ${drawerOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setDrawerOpen(false)}>&times;</button>
        <div className="drawer-links">
          {navLinks.map(({ label, onClick }) => (
            <a
              key={label}
              className="drawer-link"
              onClick={() => {
                setDrawerOpen(false);
                if (onClick) onClick();
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && <div className="drawer-overlay" onClick={() => setDrawerOpen(false)}></div>}
    </>
  );
};

export default Header;
