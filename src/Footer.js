import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-3" style={{ backgroundColor: "#72090e" }}>
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Transport Management System. All rights reserved.</p>
        <p className="mb-0">Our Transport Management System (TMS) is a comprehensive solution designed to streamline logistics, optimize fleet operations, and enhance overall transportation efficiency.</p>
      </div>
    </footer>
  );
};

export default Footer;
