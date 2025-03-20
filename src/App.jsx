import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header"; // Import your Header component
import Login from "./Components/Login"; // Import your Login component
import Carousel from "./Carousel"; // Import your Carousel component
import MovieCardCarousel from "./MovieCardCarousel"; // Import your MovieCardCarousel component
import MovieCarousel2 from "./MovieCarousel2"; // Import your MovieCarousel2 component
import LiveEvents from "./LiveEvents"; // Import your LiveEvents component
import CarouselComponent from "./CarouselComponent"; // Import your CarouselComponent
import Laughter from "./Laughter"; // Import your Laughter component
import Footer from "./Components/Footer"; // Import your Footer component
import EventCards from "./Components/EventCards"; // Import your EventCards component
import GiftCards from "./components/GiftCards"; // Import your GiftCards component
import "./App.css"; // Global styles for the app
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => {
  const location = useLocation(); // Hook to get the current route

  return (
    <div>
      {/* Conditionally render the Header if not on the login page */}
      {location.pathname !== "/login" && <Header />}

      {/* Define routes for the application */}
      <Routes>
        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />

        {/* Home Page Route with Carousel, Movie Carousels, and Live Events */}
        <Route
          path="/"
          element={
            <div>
              <Carousel />
              <MovieCardCarousel />
              <MovieCarousel2 />
              <LiveEvents />
              <CarouselComponent />
              <Laughter />
            </div>
          }
        />

        {/* EventCards Route */}
        <Route path="/event-cards" element={<EventCards />} />

        {/* GiftCards Route */}
        <Route path="/gift-cards" element={<GiftCards />} />
      </Routes>

      {/* Footer always rendered at the bottom */}
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
};

// Wrap the App with Router to provide routing functionality
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
