import React from "react";

export default function Services() {
  return (
    <div className="container-fluid bg-light my-5 py-6" id="service">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Services</h1>
          </div>
        </div>
        <div className="row g-4">
          {serviceData.map((service, index) => (
            <div key={index} className={`col-lg-6 wow fadeInUp`} data-wow-delay={index % 2 === 0 ? "0.1s" : "0.3s"}>
              <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div className="bg-icon flex-shrink-0 mb-3">
                  <i className={service.iconClass}></i>
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-3">{service.title}</h4>
                  <span>{service.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const serviceData = [
  {
    iconClass: "fa fa-code fa-2x text-dark",
    title: "Software Development",
    description: "Build robust and scalable software solutions tailored to your business needs. Leverage cutting-edge technologies to deliver high-quality applications. From conceptualization to deployment, ensure a seamless development process.",
  },
  {
    iconClass: "fa fa-code-branch fa-2x text-dark",
    title: "Web Development",
    description: "Create interactive and engaging websites that cater to your specific business goals. Web development services include front-end and back-end development, ensuring a seamless user experience and robust functionality.",
  },
  {
    iconClass: "fa fa-mobile fa-2x text-dark",
    title: "Mobile App Development",
    description: "Craft innovative mobile applications that provide a seamless user experience. Mobile app development services cover iOS and Android platforms, ensuring your app reaches a wide audience and meets high standards of performance and usability.",
  },
  {
    iconClass: "fa fa-laptop-code fa-2x text-dark",
    title: "UI/UX Design",
    description: "Create visually stunning and user-friendly interfaces with UI/UX design services. Focus on enhancing user satisfaction by improving the usability, accessibility, and overall delight of your digital products.",
  },
];