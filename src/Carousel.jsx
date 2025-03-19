import React from "react";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"
              className="d-block w-100"
              alt="Sample banner"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733911700713_edwebgeneralsales.jpg"
              className="d-block w-100"
              alt="Sample banner"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733829732281_webshowcase1240x300.jpg"
              className="d-block w-100"
              alt="Sample banner"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733830994928_bms1onwards.jpg"
              className="d-block w-100"
              alt="Sample banner"
            />
          </div>
        </div>

        {/* Carousel Control (Previous) */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Carousel Control (Next) */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
