import React from "react"

export default function Intro(){
    return (
        <div className="container-xxl py-6" id="about">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="d-flex align-items-center mb-5">
                            <div className="years flex-shrink-0 text-center me-4">
                                <h1 className="display-1 mb-0">15</h1>
                                <h5 className="mb-0">Years</h5>
                            </div>
                            <h3 className="lh-base mb-0">of working experience as a web designer & developer</h3>
                        </div>
                        <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                        <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Afordable Prices</p>
                        <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>High Quality Product</p>
                        <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>On Time Project Delivery</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row g-3 mb-4">
                            <div className="col-sm-6">
                                <img className="img-fluid rounded" src="img/about-1.jpg" alt=""/>
                            </div>
                            <div className="col-sm-6">
                                <img className="img-fluid rounded" src="img/about-2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <h5 className="border-end pe-3 me-3 mb-0">Happy Clients</h5>
                            <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
                        </div>
                        <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                        <div className="d-flex align-items-center mb-3">
                            <h5 className="border-end pe-3 me-3 mb-0">Projects Completed</h5>
                            <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">1234</h2>
                        </div>
                        <p className="mb-0">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}