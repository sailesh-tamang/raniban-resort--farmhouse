import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaMusic } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      style={{
        position: "fixed",    // always fixed
        bottom: 0,            // stick at bottom
        left: 0,
        right: 0,
        backgroundColor: "#f5f1e3",
        padding: "20px 40px",
        textAlign: "center",
        zIndex: 1000,         // keep above other content
      }}
    >
      <div>
        <p style={{ margin: 0 }}>
          ©2025 Terraces Resort & Spa. All rights reserved.
        </p>

        {/* Example social icons */}
        <div style={{ marginTop: "10px" }}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "#000" }}>
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "#000" }}>
            <FaInstagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "#000" }}>
            <FaYoutube size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "#000" }}>
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://tripadvisor.com" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "#000" }}>
            <FaTripadvisor size={20} />
          </a>
          <a href="https://music.apple.com" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "#000" }}>
            <FaMusic size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
