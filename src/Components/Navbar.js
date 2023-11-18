import React from "react"

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand d-block d-lg-none">
                {/* <h1 className="text-primary fw-bold m-0">K .D </h1> */}
                <img src="img/favicon.ico"/>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="#home" className="nav-item nav-link">Home</a>
                    <a href="#about" className="nav-item nav-link">About</a>
                    <a href="#skill" className="nav-item nav-link">Skills</a>
                </div>
                <div className="navbar-nav me-auto py-0">
                    <a href="#service" className="nav-item nav-link">Services</a>
                    <a href="#project" className="nav-item nav-link">Projects</a>
                    <a href="#contact" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    )
}