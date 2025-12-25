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
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!isLoginPage && <Header />}
      
      <main style={{ flex: 1, paddingBottom: '60px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/event-cards" element={<EventCards />} />
          <Route path="/gift-cards" element={<GiftCards />} />
        </Routes>
      </main>
      
      {!isLoginPage && <Footer />}
    </div>
  );
};

// Main App wrapped in Router
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
