import React from "react"

export default function Intro(){
    return (
        <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="51">
            <div class="container-fluid bg-light my-6 mt-0" id="home">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 py-6 pb-0 pt-lg-0">
                            <h3 class="text-primary mb-3">I'm</h3>
                            <h1 class="display-3 mb-3">Kate Winslet</h1>
                            <h2 class="typed-text-output d-inline"></h2>
                            <div class="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                            <div class="d-flex align-items-center pt-5">
                                <a href="" class="btn btn-primary py-3 px-4 me-5">Download CV</a>
                                <button type="button" class="btn-play" data-bs-toggle="modal"
                                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                    <span></span>
                                </button>
                                <h5 class="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <img class="img-fluid" src="img/profile.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}