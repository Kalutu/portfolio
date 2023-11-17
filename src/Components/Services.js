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
                                    <i className="fa fa-code fa-2x text-dark"></i>
                                </div>
                                <div className="ms-sm-4">
                                    <h4 className="mb-3">Software Development</h4>
                                    <span>Build robust and scalable software solutions tailored to your business needs. I leverage cutting-edge technologies to deliver high-quality applications. Whether you need web, mobile, or desktop applications, I've got you covered. From conceptualization to deployment, I ensure a seamless development process.</span>
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
                                <span>Create interactive and engaging websites that cater to your specific business goals. Web development services include front-end and back-end development, ensuring a seamless user experience and robust functionality.</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                            <div className="bg-icon flex-shrink-0 mb-3">
                                <i className="fa fa-mobile fa-2x text-dark"></i>
                            </div>
                            <div className="ms-sm-4">
                                <h4 className="mb-3">Mobile App Development</h4>
                                <span>Craft innovative mobile applications that provide a seamless user experience. Mobile app development services cover iOS and Android platforms, ensuring your app reaches a wide audience and meets the highest standards of performance and usability.</span>
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
                                <span>Create visually stunning and user-friendly interfaces with my UI/UX design services. I focus on enhancing user satisfaction by improving the usability, accessibility, and overall delight of your digital products.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        
    )
}