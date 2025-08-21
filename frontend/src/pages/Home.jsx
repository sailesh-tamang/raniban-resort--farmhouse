import React from 'react';
import backgroundimage from '../images/image.png';
import image1 from '../images/image1.jpg';
import AutoPlay from '../components/Slider';

function Home() {
  return (
    <div
    style={{
        
        backgroundSize: 'cover',      // cover entire area
        backgroundPosition: 'center', // center the image
        position: 'relative',       // relative positioning for child elements
        width: '100vw',               // full viewport width
        marginTop :'54px',          // full viewport height
        marginLeft: '-200px',
        marginRight: '-200px',
        marginBottom: '0px',
        padding: '0px',
        overflow: 'hidden', // hide overflow to prevent scrollbars
        minHeight: '100vh', // ensure full height
      }}>
      {/* Greeting Section - Eco-Friendly Introduction */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#f9f6f1",
          color: "#333",
        }}
      >
        <div>

        <AutoPlay/>
        </div>
        <h1 style={{ fontSize: "2.5rem", color: "#2e6048" }}> Welcome to Raniban Resort🌿</h1>
        <h2 style={{ fontSize: "1.5rem", color: "#4a7856", marginTop: "10px" }}>
          An Eco-Friendly Haven of Peace in Dhading, Nepal
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "30px auto",
            lineHeight: "1.8",
          }}
        >
          Just an hour’s drive from Kathmandu, Raniban Resort is your perfect escape into nature.
          Surrounded by lush green hills and overlooking the majestic Himalayas, our resort is
          designed for those who seek peace, simplicity, and a closer connection with the earth.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "20px auto",
            lineHeight: "1.8",
          }}
        >
          At Raniban Resort, we believe in living in harmony with nature. From eco-friendly practices
          to locally inspired architecture, every corner of our resort reflects sustainability and
          respect for the environment. Here, you can slow down, breathe fresh mountain air, and
          rediscover tranquility away from the city.
        </p>
      </div>

      {/* Existing Background Image Section */}
      <div
        style={{
          position: "relative", // changed from absolute to relative
          top: 100,
          left: 0,
          right: 0,
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          height:'100%',
          width: '100%', // ensures full viewport height
        }}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            color:'rgba(255, 255, 255, 0.8)',
          }}
        >
          <h1>Enjoy your Eco-Friendly Stay</h1>
        </div>
       

        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            marginTop: '33%',
            color: 'black',
            fontSize: '1.3em',
            fontStyle: 'italic',
            backgroundColor: '#f9f6f1',
          }}
        >
          <p>
            Raniban Resort is a beautiful place to relax and enjoy nature. We offer a variety of amenities and activities for our guests.
          </p>
          <p>
            Whether you're looking for adventure or relaxation, we have something for everyone. Come
            and experience the beauty of Raniban Resort!
          </p> 
        </div>
      </div>
      <div>
          <img
            src={image1}
            alt="Raniban Resort"
            style={{
              marginTop: '200px',
              width: '100%',
              height: 'auto',
              marginTop: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(241, 238, 238, 0.2)',
              display: 'flex',
              
            }}
          />
        </div>
        
    </div>
  );
}

export default Home;