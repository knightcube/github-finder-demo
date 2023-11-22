import React, { useEffect } from "react";

const Footer = () => {
  const footerYear = new Date().getFullYear();
 
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright ©{footerYear} - All right reserved</p>
    </footer>
  );
};

export default Footer;
