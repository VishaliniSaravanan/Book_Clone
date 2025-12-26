import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState('Your Location');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  console.log('Header is rendering'); // Debug log

  return (
    <>
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        backgroundColor: 'white',
        width: '100%'
      }}>
        <nav 
          className="navbar navbar-light shadow-sm" 
          style={{ 
            backgroundColor: 'white',
            padding: '0.5rem 1rem',
            borderBottom: '1px solid #ddd'
          }}
        >
          <div 
            className="container-fluid" 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            {/* Logo */}
            <a 
              className="navbar-brand" 
              href="/"
              style={{ flexShrink: 0 }}
            >
              <img 
                src="https://latestlogo.com/wp-content/uploads/2024/03/bookmyshow.svg" 
                alt="BookMyShow"
                style={{ height: '40px', width: 'auto', display: 'block' }}
              />
            </a>

            {/* Search Bar */}
            <input
              className="form-control"
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              aria-label="Search"
              style={{ 
                flex: '1',
                minWidth: '200px',
                maxWidth: '600px'
              }}
            />

            {/* Location Dropdown */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '14px',
                  whiteSpace: 'nowrap'
                }}
              >
                {selectedLocation}
                <span style={{ fontSize: '12px' }}>▼</span>
              </button>
              
              {dropdownOpen && (
                <ul 
                  style={{ 
                    display: 'block',
                    position: 'absolute',
                    top: 'calc(100% + 4px)',
                    left: 0,
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '0.5rem 0',
                    minWidth: '150px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 1000,
                    listStyle: 'none',
                    margin: 0
                  }}
                >
                  {locations.map((location) => (
                    <li key={location}>
                      <button
                        onClick={() => {
                          setSelectedLocation(location);
                          setDropdownOpen(false);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.5rem 1rem',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        {location}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Sign In Button */}
            <button 
              onClick={() => navigate('/login')}
              style={{
                backgroundColor: '#dc3545',
                border: 'none',
                color: 'white',
                padding: '0.375rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                flexShrink: 0,
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Sign In
            </button>

            {/* Hamburger for Mobile */}
            <button 
              className="mobile-only"
              onClick={() => setDrawerOpen(true)}
              style={{
                fontSize: '24px',
                padding: '4px 10px',
                border: '1px solid #6c757d',
                background: 'white',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'none'
              }}
            >
              &#9776;
            </button>
          </div>
        </nav>
        
        {/* Navigation Links Menu */}
        <div 
          style={{
            backgroundColor: 'white',
            borderTop: '1px solid #e0e0e0',
            padding: '0.5rem 1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            overflowX: 'auto'
          }}
          className="desktop-nav"
        >
          {navLinks.map(({ label, onClick }) => (
            <a
              key={label}
              onClick={onClick || (() => {})}
              style={{
                color: '#333',
                textDecoration: 'none',
                cursor: onClick ? 'pointer' : 'default',
                fontSize: '14px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                transition: 'color 0.2s, background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (onClick) {
                  e.target.style.color = '#d81f26';
                  e.target.style.backgroundColor = '#f0f0f0';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#333';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`side-drawer ${drawerOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: drawerOpen ? 0 : '-280px',
          width: '280px',
          height: '100vh',
          background: 'white',
          boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.2)',
          padding: '1rem',
          transition: 'right 0.3s ease',
          zIndex: 1050
        }}
      >
        <button 
          className="close-btn" 
          onClick={() => setDrawerOpen(false)}
          style={{
            fontSize: '30px',
            background: 'none',
            border: 'none',
            float: 'right',
            cursor: 'pointer'
          }}
        >
          &times;
        </button>
        <div style={{ 
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map(({ label, onClick }) => (
            <a
              key={label}
              onClick={() => {
                setDrawerOpen(false);
                if (onClick) onClick();
              }}
              style={{
                fontSize: '1.1rem',
                color: '#333',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'color 0.2s, background-color 0.2s',
                padding: '0.5rem',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#d81f26';
                e.target.style.backgroundColor = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#333';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div 
          onClick={() => setDrawerOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1040
          }}
        />
      )}
    </>
  );
};

export default Header;