import React from "react";

export default function Skills() {
  return (
    <div className="container-xxl py-6 pb-5" id="skill">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 mb-5">Skills & Experience</h1>

            <h3 className="mb-4">My Skills</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                {skillsData.slice(0, 3).map((skill, index) => (
                  <div key={index} className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">{skill.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                {skillsData.slice(3).map((skill, index) => (
                  <div key={index} className="skill mb-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="font-weight-bold">{skill.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
              <li className="nav-item w-50">
                <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill" href="#tab-1">
                  Experience
                </button>
              </li>
              <li className="nav-item w-50">
                <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill" href="#tab-2">
                  Education
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row gy-5 gx-4">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="col-sm-6">
                      <h5>{exp.title}</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">{exp.date}</p>
                      <h6 className="mb-0">{exp.company}</h6>
                    </div>
                  ))}
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row gy-5 gx-4">
                  {educationData.map((edu, index) => (
                    <div key={index} className="col-sm-6">
                      <h5>{edu.title}</h5>
                      <hr className="text-primary my-2" />
                      <p className="text-primary mb-1">{edu.date}</p>
                      <h6 className="mb-0">{edu.institution}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const skillsData = [
  { title: "React JS" },
  { title: "Next JS" },
  { title: "MongoDB" },
  { title: "Node JS" },
  { title: "React Native" },
  { title: "Django" },
];

const experienceData = [
  // {
  //   title: "Software Engineer",
  //   date: "Dec 2023 - Present",
  //   company: "Janja Programmers",
  // },
  {
    title: "Software Engineer Intern",
    date: "Sept 2023 - Nov 2023",
    company: "Eujim Solutions",
  },
];

const educationData = [
  {
    title: "Bsc Computer Science",
    date: "2020 - 2024",
    institution: "Technical University of Mombasa",
  },
];
