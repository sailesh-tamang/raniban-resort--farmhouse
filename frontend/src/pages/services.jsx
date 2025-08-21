import React from 'react';
import Slider from '../components/SliderService.jsx';

// Inquiry Box Component
function InquiryBox() {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      maxWidth: "300px",
      backgroundColor: "#0ebc1cff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      padding: "70px",
    }}>
      <div style={{ backgroundColor: "#fff", color: '#0ebc1cff', padding: "10px", borderRadius: "5px" }}>
        <h3 style={{ marginTop: 10,marginBlockEnd:10,fontFamily:'serif' }}>Send Your Inquiry</h3>
      </div>
      <form style={{ display: "flex", flexDirection: "column", gap: "13px", marginTop: "10px", }}>
        <input type="text" placeholder="Full Name*" required  style={{color:'white',backgroundColor:'white',padding:'5px'}}/>
        <input type="email" placeholder="Email*" required style={{color:'white',backgroundColor:'white',padding:'5px'}}/>
        <input type="tel" placeholder="Phone (optional)"  style={{color:'white',backgroundColor:'white',padding:'5px'}}/>
        <textarea placeholder="Message*" required style={{color:'white',backgroundColor:'white',padding:'5px'}}></textarea>
        <button type="submit" style={{
          padding: "10px",
          backgroundColor: "#faf8f8ff",
          color: "#0ebc1cff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          fontFamily: 'serif',
        }}>
          SEND
        </button>
      </form>
    </div>
  );
}

export const Services = () => {
  return (
    <div style={{ padding: '5px' ,backgroundColor: '#f0f0f0',width: '100vw',marginLeft: '-200px',marginRight: '-200px', }}>

      {/* Slider at the top */}
      <div>
        <Slider />
      </div>

      {/* Two-column layout */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "40px 100px",
        gap: "40px"
      }}>

        {/* Left: Facilities + On-demand */}
        <div style={{ flex: 2 }}>
          <h2 style={{ color: 'green', textAlign: 'left' }}>Facilities</h2>
          <ul style={{ listStyleType: 'none', padding: 0, color: 'black', textAlign: 'left' }}>
            <li>→ Restaurant/ Bar</li>
            <li>→ Airport pick-up/drop upon request</li>
            <li>→ Tea in everyroom</li>
            <li>→ BBQ - on demand</li>
            <li>→ Free WiFi</li>
            <li>→ Instant hot/cold shower</li>
            <li>→ Some wheelchair friendly rooms</li>
            <li>→ Safety deposit box at reception</li>
            <li>→ Led TV</li>
            <li>→ Hair dryer</li>
            <li>→ Complimentary toiletries</li>
            <li>→ 24 hour security guard</li>
            <li>→ CCTV at premises</li>
            <li>→ Meeting hall (capacity for maximum 50 people)</li>
            <li>→ Doctor on call</li>
            <li>→ 24 hour power back up</li>
            <li>→ Free parking for maximum 15 cars</li>
            <li>→ Peaceful garden with many fruit trees</li>
            <li>→ Laundry/valet, Spa, Yoga & Massage, ATM, Bakery shop, Super market, Souvenir shops</li>
          </ul>

          <h3 style={{ marginTop: '20px', color: 'green', textAlign: 'left' }}>On-demand services:</h3>
          <ul style={{ listStyleType: 'none', padding: 0, color: 'black', textAlign: 'left' }}>
            <li>→ Travel information and tour guide</li>
            <li>→ Staff support for meetings and conventions</li>
            <li>→ Secretarial Services</li>
            <li>→ Technical Assistance</li>
            <li>→ Organize hikes and treks (in and outside the Kathmandu valley)</li>
            <li>→ Taxi and shuttle bus reservations</li>
            <li>→ Bookings and reservations in different other hotels on guest’s request</li>
          </ul>
        </div>

        {/* Right: Inquiry Box */}
        <div style={{ flex: 1}}>
          <InquiryBox />
          
        </div>

      </div>
    </div>
  );
};
