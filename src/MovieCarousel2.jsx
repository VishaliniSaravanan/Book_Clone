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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTg4IExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00426859-hknhkgsrlq-portrait.jpg"
                  className="card-img-top"
                  alt="Bioscope: The Story of the Story Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Bioscope: The Story of the Story</h5>
                  <p className="card-text">Comedy/Drama</p>
                </div>
              </div>
            </div>
            {/* Add more movie cards */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgRWFybHkgUmF0aW5ncw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00427440-lvyqzklbfx-portrait.jpg"
                  className="card-img-top"
                  alt="Vijayapuri Veeran Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Vijayapuri Veeran</h5>
                  <p className="card-text">Action/Adventure/Fantasy</p>
                </div>
              </div>
            </div>
            {/* Add similar cards for Martin, Once Upon a Time in Madras, Lara */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS44LzEwICAxMi4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00328827-nqnhbnldup-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Martin</h5>
                  <p className="card-text">Action/Drama/Thriller</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICA2MTIgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00437619-mxfycnhdfb-portrait.jpg"
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny42LzEwICA1MiBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00425742-plkjcdhvfc-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Lara</h5>
                  <p className="card-text">Suspense/Thriller</p>
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS40LzEwICAzLjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00434897-hkvgynjgfq-portrait.jpg"
                  className="card-img-top"
                  alt="Moana 2 Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Murmur</h5>
                  <p className="card-text">Horror/Drama/Supernatural</p>
                </div>
              </div>
            </div>
            {/* Add more cards for Mufasa, Identity, Marco, Max */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA1Ni43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-epynyumney-portrait.jpg"
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNy44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00423622-mfexxlgepu-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Identity</h5>
                  <p className="card-text">Action/Crime/Thriller</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA4Ni4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00416394-jmmlluuywc-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Marco</h5>
                  <p className="card-text">Action/Thriller</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAzNi45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383005-hagfembqmq-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Max(2024)</h5>
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
