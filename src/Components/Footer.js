import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid bg-dark text-white py-4">
      <div className="container">
        <div className="text-center mb-3 mb-md-0">
          &copy; {currentYear}{" "}
          <a className="border-bottom text-secondary" href="#">
            Kalutu Daniel
          </a>
          , All Rights Reserved.
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}