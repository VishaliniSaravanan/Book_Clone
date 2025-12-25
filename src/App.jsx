import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import EventCards from "./Components/EventCards";
import GiftCards from "./Components/GiftCards";

// Home components
import Carousel from "./Carousel";
import MovieCardCarousel from "./MovieCardCarousel";
import MovieCarousel2 from "./MovieCarousel2";
import LiveEvents from "./LiveEvents";
import CarouselComponent from "./CarouselComponent";
import Laughter from "./Laughter";

// Home Page Component
const Home = () => (
  <>
    <Carousel />
    <MovieCardCarousel />
    <MovieCarousel2 />
    <LiveEvents />
    <CarouselComponent />
    <Laughter />
  </>
);

// App content using useLocation
const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {/* Header shown on all pages except login */}
      {location.pathname !== "/login" && <Header />}

      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/event-cards" element={<EventCards />} />
        <Route path="/gift-cards" element={<GiftCards />} />
      </Routes>

      {/* Footer always shown */}
      <Footer />
    </>
  );
};

// Main App wrapped in Router
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
