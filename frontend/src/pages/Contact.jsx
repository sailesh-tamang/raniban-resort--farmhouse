import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

export const Contact = () => {
  return (
  <div style={{ padding: '5px' ,backgroundColor: '#f0f0f0',width: '100vw',marginLeft: '-200px',marginRight: '-200px', }}> 
   <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "40px 100px",
      gap: "40px"

    }}
  >
    <div style={{ flex: 3,color: 'green' }}>
      <h2>📞 Contact Us</h2>
      <p><FaPhoneAlt /> +977-9841790477</p>
      <p><FaEnvelope /> ranibanresort.com</p>
      <p><FaMapMarkerAlt /> Raniban resort, Dhading, Nepal</p>
    </div>
     <div>
      <InquiryBox />
     </div>
     
      
    </div>
    
    
  </div>
  

  )
}
