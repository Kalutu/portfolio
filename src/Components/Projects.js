import React from "react"

export default function Projects(){
    return (
        <div className="container-xxl py-6 pt-5" id="project">
            <div className="container">
                <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-lg-6">
                        <h1 className="display-5 mb-0">My Projects</h1>
                    </div>
                    {/* <div className="col-lg-6 text-lg-end">
                        <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                            <li className="mx-3 active" data-filter="*">All Projects</li>
                            <li className="mx-3" data-filter=".first">UI/UX Design</li>
                            <li className="mx-3" data-filter=".second">Graphic Design</li>
                        </ul>
                    </div> */}
                </div>
                <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-lg-4 col-md-6 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src="img/project-1.jpg" alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://github.com/Kalutu/quote-machine"><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src="img/project-2.jpg" alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://plan-master.vercel.app/"><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src="img/project-3.jpg" alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://quickten.vercel.app/"><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src="img/project-4.jpg" alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src="img/project-5.jpg" alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second">
                        <div className="portfolio-img rounded overflow-hidden">
                            <img className="img-fluid" src="img/project-6.jpg" alt=""/>
                            <div className="portfolio-btn">
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://25add5clock.vercel.app/"><i className="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}