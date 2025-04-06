import React from 'react';

const MovieCardCarousel = () => {
  return (
    <div
      id="movieCardCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // Set autoplay interval
      style={{
        margin: '20px auto',
        padding: '10px',
        backgroundColor: 'white',
        maxWidth: '90%',
        position: 'relative',
      }}
    >
      <h5
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: 'rgb(63, 61, 61)',
          display: 'inline-block',
        }}
      >
        Recommended Movies
      </h5>
      <a
        href="#"
        style={{
          fontSize: '15px',
          color: 'red',
          textDecoration: 'none',
          display: 'inline-block',
          float: 'right',
        }}
      >
        See All &gt;
      </a>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {/* Add movie cards here */}
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00430623-gxyubexxhw-portrait.jpg?updatedAt=1743941458991"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Dragon</h5>
                  <p className="card-text">Comedy/Drama/Thriller</p>
                </div>
              </div>
            </div>
            {/* Repeat similar movie cards */}
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00437649-jveyefuvfu-portrait.jpg?updatedAt=1743941458991"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Perusu</h5>
                  <p className="card-text">Comedy/Drama</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00432575-prtuezzawu-portrait.jpg?updatedAt=1743941458991"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Court : State VS a Nobody</h5>
                  <p className="card-text">Drama/Thriller</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00363454-yvvwucdegu-portrait.jpg?updatedAt=1743941474966"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">The Diplomat</h5>
                  <p className="card-text">Action/Thriller</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00410687-ctlnataapv-portrait.jpg?updatedAt=1743941458991"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">A Minecraft Movie</h5>
                  <p className="card-text">Action/Animation/Game</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {/* Add movie cards for the second slide */}
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00038721-vwwelrpfzw-portrait.jpg?updatedAt=1743941474966"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Vinnaithaandi Varuvaya</h5>
                  <p className="card-text">Drama/Romance
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00434999-qfhyqzjrnd-portrait.jpg?updatedAt=1743941458991"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Flow</h5>
                  <p className="card-text">Animation/Drama</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00019066-sapbfvslrb-portrait.jpg?updatedAt=1743941458991"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Interstellar</h5>
                  <p className="card-text">Sci-Fic/Adventure/Mystery</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00439723-spxzknkefd-portrait.jpg?updatedAt=1743954140092"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">One of Them Days</h5>
                  <p className="card-text">Drama/Comedy</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00431346-bkeajwecau-portrait.jpg?updatedAt=1743954030753"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Good Bad Ugly</h5>
                  <p className="card-text">Action/Drama/Thriller</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <img style={{
          width:'100%',
          maxWidth:'100%'
        }}src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"/>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#movieCardCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#movieCardCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MovieCardCarousel;
