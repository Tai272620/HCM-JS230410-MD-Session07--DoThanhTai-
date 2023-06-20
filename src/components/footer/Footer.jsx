import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span>Blog</span>
          <span>FAQs</span>
          <span>Contact Us</span>
        </div>
        <div className="footer-right">
          <i className="contens-item fa-brands fa-facebook-f"></i>
          <i className="contens-item fa-brands fa-twitter"></i>
          <i className="contens-item fa-brands fa-instagram"></i>
          <i className="contens-item fa-brands fa-pinterest-p"></i>
        </div>
      </div>
      <p>
        <i class="fa-regular fa-copyright"></i>
        2023 All Rights Reserved. This template in made with by{" "}
        <span style={{ color: "#fc9395" }}>QuintusLabs</span>
      </p>
    </div>
  );
};

export default Footer;
