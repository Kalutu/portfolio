import React from "react"

export default function Services(){
    return (
        <div className="container-fluid bg-light my-5 py-6" id="service">
            <div className="container">
                <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-lg-6">
                        <h1 className="display-5 mb-0">My Services</h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <a className="btn btn-primary py-3 px-5" href="">Hire Me</a>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                            <div className="bg-icon flex-shrink-0 mb-3">
                                <i className="fa fa-crop-alt fa-2x text-dark"></i>
                            </div>
                            <div className="ms-sm-4">
                                <h4 className="mb-3">Software Development</h4>
                                <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                            <div className="bg-icon flex-shrink-0 mb-3">
                                <i className="fa fa-code-branch fa-2x text-dark"></i>
                            </div>
                            <div className="ms-sm-4">
                                <h4 className="mb-3">Web Development</h4>
                                <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                            <div className="bg-icon flex-shrink-0 mb-3">
                                <i className="fa fa-code fa-2x text-dark"></i>
                            </div>
                            <div className="ms-sm-4">
                                <h4 className="mb-3">Web Design</h4>
                                <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                            <div className="bg-icon flex-shrink-0 mb-3">
                                <i className="fa fa-laptop-code fa-2x text-dark"></i>
                            </div>
                            <div className="ms-sm-4">
                                <h4 className="mb-3">UI/UX Design</h4>
                                <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        
    )
}