import React from "react";
import './Footer.css'; // Path to your CSS file

import { FaFacebookF, FaTimes, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Trending Searches Section */}
      <section className="trending-searches">
        <h2 className="section-title">Trending Searches Right Now</h2>
        <div className="searches-grid">
          <div className="search-item"><a href="#" className="search-link">Thalapathi</a></div>
          <div className="search-item"><a href="#" className="search-link">Pushpa 2: The Rule</a></div>
          <div className="search-item"><a href="#" className="search-link">Amaran</a></div>
          <div className="search-item"><a href="#" className="search-link">Miss You</a></div>
          <div className="search-item"><a href="#" className="search-link">Sorgavaasal</a></div>
          <div className="search-item"><a href="#" className="search-link">Lucky Baskhar</a></div>
          <div className="search-item"><a href="#" className="search-link">Viduthalai Part - 2</a></div>
          <div className="search-item"><a href="#" className="search-link">Mufasa: The Lion King</a></div>
          <div className="search-item"><a href="#" className="search-link">Soodhu Kavvum 2</a></div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-item">
            <i className="icon">🏕️</i>
            <p><strong>List Your Show</strong><br />Got an event or experience? Partner with us & get listed!</p>
          </div>
          <div className="contact-container">
            <a href="signin.html" className="contact-btn">Contact Us Today!</a>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-links">
            <div className="link-item">
              <i className="icon">☎️</i>
              <p><a href="signin.html" className="link">24/7 Customer Care</a></p>
            </div>
            <div className="link-item">
              <i className="icon">🎟️</i>
              <p><a href="signin.html" className="link">Resend Booking</a></p>
            </div>
            <div className="link-item">
              <i className="icon">📧</i>
              <p><a href="signin.html" className="link">Subscribe to Newsletter</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="column">
            <h4>Now Showing</h4>
            <p>Pushpa 2 | Miss You | Thalapathi</p>
          </div>
          <div className="column">
            <h4>Upcoming Movies</h4>
            <p>Dear Krishna | Dil Awaara | Rifle Club</p>
          </div>
          <div className="column">
            <h4>Movies by Genre</h4>
            <p>Action | Drama | Comedy | Thriller</p>
          </div>
          <div className="column">
            <h4>Movies by Language</h4>
            <p>Tamil | Hindi | English</p>
          </div>
          <div className="column">
            <h4>Sports Events</h4>
            <p>Football | Chess | Kabaddi</p>
          </div>
        </div>
      </footer>

      {/* Secondary Footer */}
      <footer className="footer secondary-footer">
        <div className="footer-content">
          <div className="social-media-links">
            <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="social-icon" aria-label="Close"><FaTimes /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
          <div className="copyright-text">
            <p>&copy; 2025 Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
            <p>The content on this site is protected by copyright law.</p>
          </div>
          <div className="bookmyshow-logo">
            <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1ec7711b-5527-46d7-84fa-acbb5ef0a0df_666x222.png" alt="BookMyShow Logo" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
