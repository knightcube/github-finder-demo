import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerYear = new Date().getFullYear();
 
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright ©{footerYear} - All rights reserved <Link to="https://github.com/knightcube">@knightcube</Link></p>
    </footer>
  );
};

export default Footer;
