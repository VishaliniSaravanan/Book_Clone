import React from 'react';

const CarouselComponent = () => {
  return (
    <div
      id="music"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
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
          Your Music Studio
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
            <div className="col">
              <div className="card">
                <img
                src="https://ik.imagekit.io/lbxf4ull5/et00471318-ccqkxwnzkt-portrait.jpg"
                  className="card-img-top"
                  alt="SPACETECH FESTIVAL"
                />
                <div className="card-body">
                  <h5 className="card-title">SPACETECH FESTIVAL WINTER EDITION</h5>
                  <p className="card-text">Palm Bliss Resort & Spa: Kullu NYE Parties</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                src="https://ik.imagekit.io/lbxf4ull5/et00467933-pdebndphpk-portrait.jpg"
                  className="card-img-top"
                  alt="Sunburn Arena"
                />
                <div className="card-body">
                  <h5 className="card-title">Sunburn Arena NYE ft. ARGY</h5>
                  <p className="card-text">Bhartiya Mall of Bengaluru Concerts</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                src="https://ik.imagekit.io/lbxf4ull5/et00461392-qxnxjecnvf-portrait.jpg"
                  className="card-img-top"
                  alt="Calvin Harris"
                />
                <div className="card-body">
                  <h5 className="card-title">CALVIN HARRIS - Live in Bengaluru</h5>
                  <p className="card-text">NICE Grounds: Bengaluru Concerts</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                src="https://ik.imagekit.io/lbxf4ull5/et00471139-lwrbdvbdnn-portrait.jpg"
                  className="card-img-top"
                  alt="Thalaivar 50"
                />
                <div className="card-body">
                  <h5 className="card-title">THALAIVAR 50 SUPER STAR</h5>
                  <p className="card-text">Gandhi Memorial Museum: Madurai Concerts</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                 src="https://ik.imagekit.io/lbxf4ull5/et00458267-edxnqhkbuv-portrait.jpg"
                  className="card-img-top"
                  alt="Lollapalooza"
                />
                <div className="card-body">
                  <h5 className="card-title">Lollapalooza India 2026</h5>
                  <p className="card-text">Mahalaxmi Race Course: Mumbai Concerts</p>
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
                  src="https://ik.imagekit.io/lbxf4ull5/et00469295-pleswjxnrp-portrait.jpg"
                  className="card-img-top"
                  alt="Jung Kook Exhibition"
                />
                <div className="card-body">
                  <h5 className="card-title">Jung Kook Exhibition "GOLDEN: The Moments"</h5>
                  <p className="card-text">Stage 1, Mehboob Studios: Mumbai Artist Legacy</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00475232-svwcjalnpx-portrait.jpg"
                  className="card-img-top"
                  alt="Def Leppard"
                />
                <div className="card-body">
                  <h5 className="card-title">Def Leppard India Tour - Bengaluru</h5>
                  <p className="card-text">NICE Grounds: Bengaluru Concerts</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00469594-aatlwwqckz-portrait.jpg"
                  className="card-img-top"
                  alt="Linkin Park"
                />
                <div className="card-body">
                  <h5 className="card-title">Linkin Park: From Zero World Tour 2026</h5>
                  <p className="card-text">Brigade Innovation Gardens: Muddenahalli, Bengaluru Concerts</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00464841-ezpmjbsucr-portrait.jpg"
                  className="card-img-top"
                  alt="John Mayer"
                />
                <div className="card-body">
                  <h5 className="card-title">John Mayer Solo - Live In Mumbai, 2026</h5>
                  <p className="card-text">Mahalaxmi Race Course: Mumbai Concerts</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://ik.imagekit.io/lbxf4ull5/et00457514-abzhhmswcj-portrait.jpg"
                  alt="The Lumineers"
                />
                <div className="card-body">
                  <h5 className="card-title">The Lumineers: The Automatic World Tour</h5>
                  <p className="card-text">Huda Ground: Gurugram Concerts</p>
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
        data-bs-target="#music"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#music"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
