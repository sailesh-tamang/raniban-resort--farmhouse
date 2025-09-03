import React from 'react';
import tentimage from '../images/tentimage.jpg';
import luxuryhouse from '../images/luxuryhouse.jpeg';
import image1 from '../images/image1.jpg';

export const BookNow = () => {
  return (
    <div
      style={{
        width: '100vw',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        flexDirection: 'row', // stack in column
        alignItems: 'center', // center horizontally
        gap: '18x', // space between cards
        padding: '20px',
        marginTop:'20px',
        marginLeft:'-300px',
        marginRight:'-300px'
      }}
    >
      {/* Tent House */}
      <div
        style={{
          width: '80%',
          maxWidth: '500px',
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <img
          src={tentimage}
          alt="tent house"
          style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>tent house</h1>
        <p>this is all about the tent house</p>
        <p>Rs 2000 per day</p>
        <button>Book Now</button>
      </div>

      {/* Luxury House */}
      <div
        style={{
          width: '80%',
          maxWidth: '500px',
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <img
          src={luxuryhouse}
          alt="luxury house"
          style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>luxury house</h1>
        <p>this is luxury house</p>
        <p>Rs 5000 per day</p>
        <button>Book Now</button>
      </div>

      {/* Daycation */}
      <div
        style={{
          width: '80%',
          maxWidth: '500px',
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <img
          src={image1}
          alt="Daycation"
          style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <h1>Daycation</h1>
        <p>This is the package include of daycation</p>
        <p>Rs 3000 per day</p>
        <button>Book Now</button>
      </div>
    </div>
  );
};
