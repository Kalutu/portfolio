import React from "react";

export default function Projects() {
  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Projects</h1>
          </div>
        </div>
        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
          {projectData.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src={project.imageSrc} alt={`Project ${index + 1}`} />
                <div className="portfolio-btn">
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.imageSrc} data-lightbox="portfolio" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-eye"></i>
                  </a>
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projectData = [
  {
    imageSrc: "img/project-1.jpg",
    link: "https://quickten.vercel.app/",
  },
  {
    imageSrc: "img/project-2.jpg",
    link: "#",
  },
  {
    imageSrc: "img/project-3.jpg",
    link: "https://25add5clock.vercel.app/",
  },
];
