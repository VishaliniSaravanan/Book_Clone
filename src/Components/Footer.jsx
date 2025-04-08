import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-item">
          <span role="img" aria-label="list-icon"></span>
          <p>
            <strong>List your Show</strong><br />
            Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow
          </p>
        </div>
        <div className="contact-container">
          <a href="#" className="contact-btn">Contact today!</a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <div className="footer-links">
          <div className="link-item">
            <span role="img" aria-label="phone-icon"></span>
            <p><a href="#" className="link">24/7 Customer Care</a></p>
          </div>
          <div className="link-item">
            <span role="img" aria-label="ticket-icon"></span>
            <p><a href="#" className="link">Resend Booking Confirmation</a></p>
          </div>
          <div className="link-item">
            <span role="img" aria-label="email-icon"></span>
            <p><a href="#" className="link">Subscribe to the Newsletter</a></p>
          </div>
        </div>
      </div>

      {/* Bottom Section (Main Content) */}
      <div className="footer-bottom">
        <div className="footer-section">
          <h3>TOP MOVIES TO WATCH ONLINE</h3>
          <p>The Wild Robot | Bridget Jones: Mad About the Boy | Hunter | Interstellar</p>
        </div>
        <div className="footer-section">
          <h3>TOP ONLINE PREMIERE MOVIES</h3>
          <p>
            Universal Language | Daisy's It's Your Birthday! | The Turn Ahead | Rewind (2021) | Christmas Eve in Miller's Point | Ahaan | Winter Sleep | The Invitation | The Brutalist | Missing Face
          </p>
        </div>
        <div className="footer-section">
          <h3>TOP ONLINE EXCLUSIVE MOVIES</h3>
          <p>
            Sidonie in Japan | The Witnesses | Holy Spider | The Speech | The Thief Collector | Coup! | Hotel Coppelia | Wrong Place | On the Edge | Earth Rescue Day
          </p>
        </div>
        <div className="footer-section">
          <h3>ONLINE BUNDLES</h3>
          <p>
            Online Streaming Online Movies | Recent Premieres Online Movies | Blockbusters Online Movies | Recommended Online Movies | Archives Online Movies | Rediscover Indian Cinema Online Movies | Movies in Dubbed Language Online Movies | 
            BIGBLAST75 Online Movies | Flash Buy Online Movies | 60% off on selected titles Online Movies
          </p>
        </div>
        <div className="footer-section">
          <h3>ONLINE MOVIES BY LANGUAGE</h3>
          <p>
            Online Movies in Sindhi | Online Movies in French | Online Movies in Marathi | Online Movies in Kannada | Online Movies in English | Online Movies in Malayalam | Online Movies in Bengali | Online Movies in Punjabi | Online Movies in Bhojpuri | 
            Online Movies in Assamese
          </p>
        </div>
        <div className="footer-section">
          <h3>ONLINE MOVIES BY GENRE</h3>
          <p>
            Drama Online Movies | Action Online Movies | Thriller Online Movies | Comedy Online Movies | Adventure Online Movies | Crime Online Movies | Romantic Online Movies | Horror Online Movies | Mystery Online Movies | Sci-Fi Online Movies
          </p>
        </div>
        <div className="footer-section">
          <h3>COUNTRIES</h3>
          <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>
        </div>
        <div className="footer-section">
          <h3>HELP</h3>
          <p>About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemap | FAQs | Terms and Conditions | Privacy Policy</p>
        </div>
        <div className="footer-section">
          <h3>BOOKMYSHOW EXCLUSIVES</h3>
          <p>Lollapalooza India | BookACake | Corporate Vouchers | Gift Cards | List My Show | Offers | Stream | Trailers</p>
        </div>
      </div>

      {/* Secondary Footer */}
      <div className="footer-secondary">
        <div className="footer-logo">
          <span className="bookmyshow-logo">book<span className="highlight">my</span>show</span>
          </div>
<div className="social-media-links">
  <a href="#" className="social-icon" aria-label="Facebook">
    <span role="img" aria-label="facebook">
      <i className="fi fi-brands-facebook"></i>
    </span>
  </a>
  <a href="#" className="social-icon" aria-label="Close">
    <span role="img" aria-label="close">
    <i class="fi fi-brands-github"></i>
    </span>
  </a>
  <a href="#" className="social-icon" aria-label="YouTube">
    <span role="img" aria-label="youtube">
      <i className="fi fi-brands-youtube"></i>
    </span>
  </a>
  <a href="#" className="social-icon" aria-label="Instagram">
    <span role="img" aria-label="instagram">
      <i className="fi fi-brands-instagram"></i>
    </span>
  </a>
  <a href="#" class            Name="social-icon" aria-label="LinkedIn">
    <span role="img" aria-label="linkedin">
      <i className="fi fi-brands-linkedin"></i>
    </span>
  </a>
</div>
        <div className="copyright-text">
          <p>
© 2025 CloneWeb Entertainment Pvt. Ltd. All Rights Reserved. This is a frontend web clone of BookMyShow, created for educational or demonstration purposes only. It replicates the design and layout but does not function as the real website. The content and images used are inspired by the original site and are copyright protected, with copyrights vesting with their respective owners. This project is not affiliated with or endorsed by BookMyShow .Unauthorized use of the original content is prohibited and punishable by law.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;