import React from "react";

export default function About() {
  return (
    <div className="container-xxl" id="about">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex flex-column flex-lg-row align-items-center mb-5">
              <div className="years flex-shrink-0 text-center me-lg-4 mb-3 mb-lg-0">
                <h1 className="display-1 mb-0">3</h1>
                <h5 className="mb-0">Years</h5>
              </div>
              <div>
                <h3 className="lh-base mb-0">of working experience as a software developer</h3>
              </div>
            </div>
            <p className="mb-4">
              Over the past three years, I have been immersed in the world of software development, working on a wide range of projects and collaborating with diverse clients. From small businesses to large corporations, I have gained invaluable experience in delivering high-quality software solutions that meet and exceed client expectations.
            </p>
            <p className="mb-4">
              Collaboration and effective communication are at the core of my consulting approach. I believe in building strong partnerships with clients, understanding their goals and visions, and translating them into functional software solutions. By fostering open dialogue and incorporating feedback throughout the development process, I ensure that the final product aligns perfectly with clients' expectations.
            </p>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="mb-4 d-flex align-items-center justify-content-center">
                <img className="img-fluid rounded" src="img/about-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}