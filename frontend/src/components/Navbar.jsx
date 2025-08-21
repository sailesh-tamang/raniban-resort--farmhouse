import { Link } from "react-router-dom";
import logo from "/raniban-logo.png"; // Adjust the path as necessary

export default function Navbar() {
  return (
    <>
      <style>
        {`
          .nav-link {
            position: relative;
            text-decoration: none;
            color: black;
            font-size: 18px;
            font-weight: 500;
            padding-bottom: 5px;
          }
          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background-color: black;
            transition: width 0.6s ease;
          }
          .nav-link:hover::after {
            width: 100%;
          }
        `}
      </style>

      <nav
        style={{
          padding: "10px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "70px",
          backgroundColor: "#65cf19ff",
          display: "flex",
          justifyContent: "left",
          gap: "10%",
          margin: "1px",
          color: "black",
          zIndex: 2,
        }}
      >
        <div>
          <img
            src={logo}
            alt="Raniban Resort Logo"
            style={{
              height: "90px",
              width: "auto",
              marginTop: "-10px",
              marginLeft: "-9.9px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "90px",
            alignItems: "center",
            marginLeft: "200px",
          }}
        >
          <Link to="/" className="nav-link" >Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/services" className="nav-link">Facilities & Services</Link>
          <Link to="/booknow" className="nav-link">Booking</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>
      </nav>
    </>
  );
}
