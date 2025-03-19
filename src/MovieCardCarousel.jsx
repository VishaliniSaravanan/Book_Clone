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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA2Mi43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00430623-rtqnsspgng-portrait.jpg"
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA5NjUgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00437649-jveyefuvfu-portrait.jpg"
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS42LzEwICAyNC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432575-prtuezzawu-portrait.jpg"
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA3LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363454-erzxfsayzw-portrait.jpg"
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS4ySyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00420986-gkvturtcmw-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Then Chennai</h5>
                  <p className="card-text">Action/Crime/Thriller</p>
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTYwIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00438008-wzcqfpvqam-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Trauma</h5>
                  <p className="card-text">Crime/Thriller
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-My40SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00435187-tjshdnhwbt-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Asthram-The Secret</h5>
                  <p className="card-text">Crime/Thriller</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Ny43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00400689-thhvkaglxf-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Miss You</h5>
                  <p className="card-text">Comedy/Romantic</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-My4xSyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419606-gneqrpnqus-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Soodhu Kavvum 2</h5>
                  <p className="card-text">Action/Comedy/Thriller</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAzLjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00431691-nrmauhflgm-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Sabdham</h5>
                  <p className="card-text">Horror/Thriller</p>
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
