import React from "react"

export default function Intro(){
    return (
        <div class="container-xxl py-6 pt-5" id="project">
            <div class="container">
                <div class="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                    <div class="col-lg-6">
                        <h1 class="display-5 mb-0">My Projects</h1>
                    </div>
                    <div class="col-lg-6 text-lg-end">
                        <ul class="list-inline mx-n3 mb-0" id="portfolio-flters">
                            <li class="mx-3 active" data-filter="*">All Projects</li>
                            <li class="mx-3" data-filter=".first">UI/UX Design</li>
                            <li class="mx-3" data-filter=".second">Graphic Design</li>
                        </ul>
                    </div>
                </div>
                <div class="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
                    <div class="col-lg-4 col-md-6 portfolio-item first">
                        <div class="portfolio-img rounded overflow-hidden">
                            <img class="img-fluid" src="img/project-1.jpg" alt=""/>
                            <div class="portfolio-btn">
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-1.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item second">
                        <div class="portfolio-img rounded overflow-hidden">
                            <img class="img-fluid" src="img/project-2.jpg" alt=""/>
                            <div class="portfolio-btn">
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-2.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item first">
                        <div class="portfolio-img rounded overflow-hidden">
                            <img class="img-fluid" src="img/project-3.jpg" alt=""/>
                            <div class="portfolio-btn">
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-3.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item second">
                        <div class="portfolio-img rounded overflow-hidden">
                            <img class="img-fluid" src="img/project-4.jpg" alt=""/>
                            <div class="portfolio-btn">
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-4.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item first">
                        <div class="portfolio-img rounded overflow-hidden">
                            <img class="img-fluid" src="img/project-5.jpg" alt=""/>
                            <div class="portfolio-btn">
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-5.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item second">
                        <div class="portfolio-img rounded overflow-hidden">
                            <img class="img-fluid" src="img/project-6.jpg" alt=""/>
                            <div class="portfolio-btn">
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-6.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                                <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}