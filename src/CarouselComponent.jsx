import React from 'react';

const CarouselComponent = () => {
  return (
    <div
      id="music"
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
            {/* Movie Card 1 */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNCBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00432207-yucrwuwwkv-portrait.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Ed Sheeran +-=x India Tour 2025 in CHENNAI</h5>
                  <p className="card-text">YMCA ground: Chennai Concerts</p>
                </div>
              </div>
            </div>
            {/* Add more movie cards */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNyBNYXk%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00437140-eplnqgnkny-portrait.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Lollapalooza India 2025</h5>
                  <p className="card-text">Mahalaxmi Race Course: Mumbai Concerts</p>
                </div>
              </div>
            </div>
            {/* Add similar cards for Martin, Once Upon a Time in Madras, Lara */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMCBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00429797-tuxkhgqgrx-portrait.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Unni Menon-40</h5>
                  <p className="card-text">Kamarajar Arangam : Chennai Concerts</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IEFwcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00436625-alffcrsrjg-portrait.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Jio Presents Hamleys Wonderland</h5>
                  <p className="card-text">Jio World Garden,Gate No.3 BKC:Mumbai Entertainment</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA1IEFwcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00436595-ygpfmeqwbm-portrait.jpg"
                  className="card-img-top"
                  alt="Movie Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">"HAAZRI" A.R.Rahman Live In Concert</h5>
                  <p className="card-text">Jio World Garden,BKC:Mumbai Entertainment</p>
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
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00434940-pkrgdasbns-portrait.jpg"
                  className="card-img-top"
                  alt="Moana 2 Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Electrifying Evening</h5>
                  <p className="card-text">Chennai Concerts</p>
                </div>
              </div>
            </div>
            {/* Add more cards for Mufasa, Identity, Marco, Max */}
            <div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMyBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406561-udwzewjazf-portrait.jpg"
                  className="card-img-top"
                  alt="Moana 2 Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Lollapalooza India 2025</h5>
                  <p className="card-text">Mahalaxmi Race Course: Mumbai Concerts</p>
                </div>
              </div>
            </div><div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA0IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00436864-ztxctslyhn-portrait.jpg"
                  className="card-img-top"
                  alt="Moana 2 Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Nostalagic 90's</h5>
                  <p className="card-text">Kamarajar Arangam : Chennai Concerts</p>
                </div>
              </div>
            </div><div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMiBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00434283-zgzcelkndu-portrait.jpg"
                  className="card-img-top"
                  alt="Moana 2 Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Carnatic Duet</h5>
                  <p className="card-text">Kmarajar Arangam Chennai Concerts</p>
                </div>
              </div>
            </div><div className="col">
              <div className="card">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMCBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00435382-zbhkpqadrt-portrait.jpg"
                  className="card-img-top"
                  alt="Moana 2 Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Ranjani and Gayatri Classical Concert</h5>
                  <p className="card-text">Chennai Concerts</p>
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
