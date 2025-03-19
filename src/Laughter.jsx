import React from 'react';

const Laughter = () => {
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
          Laughter Therapy
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
            {/* Event Card 1 */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416731-wwsvachqxr-portrait.jpg"
                  className="card-img-top"
                  alt="Event 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Sit down Anish</h5>
                  <p className="card-text">Chennai</p>
                </div>
              </div>
            </div>

            {/* Add more event cards */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNyBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00131954-kfsqvpncqw-portrait.jpg"
                  className="card-img-top"
                  alt="Event 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Banker in the House</h5>
                  <p className="card-text">Outdoor Mumbai</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMSBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00312421-mzmjfachrd-portrait.jpg"
                  className="card-img-top"
                  alt="Event 3"
                />
                <div className="card-body">
                  <h5 className="card-title">OML Representation</h5>
                  <p className="card-text">Bangalore</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMSBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00135461-qwtgywhtju-portrait.jpg"
                  className="card-img-top"
                  alt="Event 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Chalta Hai Comedy</h5>
                  <p className="card-text">Multiple Venues</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBEZWMgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00135711-eppyfgqmzv-portrait.jpg"
                  className="card-img-top"
                  alt="Event 5"
                />
                <div className="card-body">
                  <h5 className="card-title">Comedy Ladder</h5>
                  <p className="card-text">Delhi Upstage</p>
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00420390-tznwksetka-portrait.jpg"
                  className="card-img-top"
                  alt="Event 6"
                />
                <div className="card-body">
                  <h5 className="card-title">Underground Comedy Festival</h5>
                  <p className="card-text">Ground</p>
                </div>
              </div>
            </div>

            {/* Add more event cards */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408394-aweeakpcqq-portrait.jpg"
                  className="card-img-top"
                  alt="Event 7"
                />
                <div className="card-body">
                  <h5 className="card-title">Tamil Stand up special</h5>
                  <p className="card-text">Chennai</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-bbdphrnchz-portrait.jpg"
                  className="card-img-top"
                  alt="Event 8"
                />
                <div className="card-body">
                  <h5 className="card-title">New Stand up show</h5>
                  <p className="card-text">Mumbai</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMyBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00396152-kurwkznpdx-portrait.jpg"
                  className="card-img-top"
                  alt="Event 9"
                />
                <div className="card-body">
                  <h5 className="card-title">Happy Ending</h5>
                  <p className="card-text">JC Residency:Madurai</p>
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
        data-bs-target="#laughhter"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#laughter"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Laughter;
