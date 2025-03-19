import React from "react";

const LiveEvents = () => {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          maxWidth: "1200px", // Limits the width
          margin: "0 auto", // Centers the content
          padding: "20px", // Adds padding around the content
        }}
      >
        <h5
          style={{
            fontSize: "32px", // Slightly smaller font size
            fontWeight: "bold",
            color: "rgb(63, 61, 61)",
            textAlign: "center",
          }}
        >
          The Best of Live Events
        </h5>

        {/* Events Container */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            margin: "20px 0", // Adds top and bottom margins
            flexWrap: "wrap", // Ensures wrapping if the screen is small
            justifyContent: "center", // Centers the event cards
          }}
        >
          {[
            {
              img: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
              alt: "Workshops & More",
            },
            {
              img: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
              alt: "Kids",
            },
            {
              img: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
              alt: "Comedy Shows",
            },
            {
              img: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
              alt: "Music Shows",
            },
          ].map((event, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                minWidth: "200px",
                maxWidth: "250px", // Reduces max width
              }}
            >
              <img
                src={event.img}
                alt={event.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10%",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Premiere Section */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#192841",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1200px", // Restricts width
            margin: "0 auto", // Centers the content
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Red-Play-Button-PNG.png"
              alt="Premiere Icon"
              style={{
                width: "50px",
                marginRight: "10px",
              }}
            />
            <div>
              <h1 style={{ fontSize: "32px", margin: "0" }}>PREMIERE</h1>
              <p
                style={{
                  marginTop: "5px",
                  fontSize: "18px", // Reduced font size
                }}
              >
                Watch new movies at home, every Friday
              </p>
            </div>
          </div>

          {/* Premiere Cards */}
          <div>
            <h2 style={{ fontSize: "24px" }}>Premieres</h2>
            <p style={{ fontSize: "16px" }}>Brand new releases every Friday</p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center", // Centers the cards
                flexWrap: "wrap", // Ensures wrapping for smaller screens
              }}
            >
              {[
                {
                  img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00417677-djedwsakau-portrait.jpg",
                  title: "Christmas Eve in Miller's Point",
                  lang: "English",
                },
                {
                  img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00413291-jgamljhjzq-portrait.jpg",
                  title: "Gladiator II",
                  lang: "English, Hindi, Tamil, Telugu",
                },
                {
                  img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00398666-aylchydrqf-portrait.jpg",
                  title: "Wicked",
                  lang: "English",
                },
              ].map((premiere, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    overflow: "hidden",
                    width: "180px", // Reduces card width
                  }}
                >
                  <img
                    src={premiere.img}
                    alt={premiere.title}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#ff5252",
                      color: "#ffffff",
                      fontSize: "14px", // Reduced tag size
                      padding: "5px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    PREMIERE
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      color: "#000",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "18px", // Reduced title font size
                        margin: "0 0 5px",
                      }}
                    >
                      {premiere.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px", // Reduced language font size
                        margin: "0",
                      }}
                    >
                      {premiere.lang}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEvents;
