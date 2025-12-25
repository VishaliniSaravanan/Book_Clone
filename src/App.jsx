import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Carousel from "./Carousel";
import MovieCardCarousel from "./MovieCardCarousel";
import MovieCarousel2 from "./MovieCarousel2";
import LiveEvents from "./LiveEvents";
import CarouselComponent from "./CarouselComponent";
import Laughter from "./Laughter";
import Footer from "./Components/Footer";
import EventCards from "./Components/EventCards";
import GiftCards from "./Components/GiftCards";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Create a new component that will use useLocation
const AppContent = () => {
  const location = useLocation();

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

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Wrap the AppContent with Router
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;