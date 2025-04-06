import React from 'react';

const MovieCarousel2 = () => {
  return (
    <div
      id="moviecarousel2"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // Autoplay interval in milliseconds
      style={{
        margin: '20px auto',
        padding: '10px',
        backgroundColor: 'white',
        maxWidth: '90%',
      }}
    >
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h5 style={{ fontSize: '30px', fontWeight: 'bold', color: 'rgb(63, 61, 61)' }}>
          Recommended Movies
        </h5>
        <a href="#" style={{ fontSize: '15px', color: 'red', textDecoration: 'none' }}>
          See All &gt;
        </a>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {/* Movie Card 1 */}
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00434215-vgxqrwwgty-portrait.jpg?updatedAt=1743952591840"
                  className="card-img-top"
                  alt="Bioscope: The Story of the Story Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">A Complete Unknown</h5>
                  <p className="card-text">Action/Drama</p>
                </div>
              </div>
            </div>
            {/* Add more movie cards */}
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00412372-chhjvzypbb-portrait.jpg?updatedAt=1743952591840"
                  className="card-img-top"
                  alt="Vijayapuri Veeran Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Mickey 17</h5>
                  <p className="card-text">Action/Adventure/Thriller</p>
                </div>
              </div>
            </div>
            {/* Add similar cards for Martin, Once Upon a Time in Madras, Lara */}
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00439075-lbgjdrclzk-portrait.jpg?updatedAt=1743952591840"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">The Door</h5>
                  <p className="card-text">Action/Drama/Thriller</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00437619-mxfycnhdfb-portrait.jpg?updatedAt=1743952591840"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">SweetHeart</h5>
                  <p className="card-text">Comedy/Romance/Drama</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00305698-jquqhbdnvv-portrait.jpg?updatedAt=1743952591840"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">L2 : Empuraan</h5>
                  <p className="card-text">Action/Crime/Thriller</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00410899-kahkzbdeqb-portrait.jpg?updatedAt=1743952591840"
                  className="card-img-top"
                  alt="Moana 2 Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">SuperBoys of Malegaon</h5>
                  <p className="card-text">Biography/Comedy/Drama</p>
                </div>
              </div>
            </div>
            {/* Add more cards for Mufasa, Identity, Marco, Max */}
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00396541-nyxlxxqjtr-portrait.jpg?updatedAt=1743952591840"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Mufasa: The Lion King</h5>
                  <p className="card-text">Animation/Drama/Adventure</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00399670-bfpmczxkrz-portrait.jpg?updatedAt=1743952591840"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Sonic 3 - The Hedgedog</h5>
                  <p className="card-text">Action/Adventure</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00433669-phcfkvtkrl-portrait.jpg?updatedAt=1743952591840"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Saree</h5>
                  <p className="card-text">Action/Thriller</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00394804-ujrgqmlwjv-portrait.jpg?updatedAt=1743953993063"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Sikandar</h5>
                  <p className="card-text">Action/Thriller/Drama</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#moviecarousel2"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#moviecarousel2"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MovieCarousel2;
