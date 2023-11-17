import React from "react"

export default function Skills(){
    return (
        <div className="container-xxl py-6 pb-5" id="skill">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="display-5 mb-5">Skills & Experience</h1>
                        
                        <h3 className="mb-4">My Skills</h3>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">HTML5</h6>
                                        {/* <h6 className="font-weight-bold">95%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">CSS3</h6>
                                        {/* <h6 className="font-weight-bold">85%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">React JS</h6>
                                        {/* <h6 className="font-weight-bold">90%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Node JS</h6>
                                        {/* <h6 className="font-weight-bold">90%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">PHP</h6>
                                        {/* <h6 className="font-weight-bold">95%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                                <div className="skill mb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-bold">Django</h6>
                                        {/* <h6 className="font-weight-bold">85%</h6> */}
                                    </div>
                                    {/* <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                            <li className="nav-item w-50">
                                <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">Experience</button>
                            </li>
                            <li className="nav-item w-50">
                                <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">Education</button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row gy-5 gx-4">
                                    <div className="col-sm-6">
                                        <h5>Software Engineer</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">Dec 2023 - Present</p>
                                        <h6 className="mb-0">Janja Programmers</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Software Engineer Intern</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">Sept 2023 - Nov 2023</p>
                                        <h6 className="mb-0">Eujim Solutions</h6>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row gy-5 gx-4">
                                    <div className="col-sm-6">
                                        <h5>Bsc Computer Science</h5>
                                        <hr className="text-primary my-2"/>
                                        <p className="text-primary mb-1">2020 - 2024</p>
                                        <h6 className="mb-0">Technical University of Mombasa</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p className="mt-5 px-5">Proficient in a variety of programming languages and technologies, including Javascript, PHP and Python, I possess a versatile skill set that allows me to adapt to different project requirements and deliver outstanding results. Whether it's building responsive and user-friendly front-end interfaces or developing robust and scalable back-end systems, I thrive on turning ideas into functional and visually appealing softwares.</p> */}
            </div>
        </div>
    )
}

