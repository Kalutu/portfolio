import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container-xxl pb-5" id="contact">
      <div className="container py-5">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">Let's Work Together</h1>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <ContactInfo />
          </div>

          <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <ContactForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactInfo = () => (
  <>
    <p className="mb-2">My Address:</p>
    <h3 className="fw-bold">Mombasa, Kenya</h3>
    <hr className="w-100" />
    <p className="mb-2">Call me:</p>
    <h3 className="fw-bold">+254 713 118 765</h3>
    <hr className="w-100" />
    <p className="mb-2">Mail me:</p>
    <h3 className="fw-bold">kalutudaniel@gmail.com</h3>
    <hr className="w-100" />
    <p className="mb-2">Follow me:</p>
    <div className="d-flex pt-2">
      {socialMediaLinks.map((link) => (
        <a
          key={link.url}
          className="btn btn-square btn-primary me-2"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  </>
);

const ContactForm = ({ handleChange, handleSubmit, formData }) => (
  <form onSubmit={handleSubmit}>
    <div className="row g-3">
      {formFields.map((field) => (
        <div key={field.id} className={`col-md-${field.width}`}>
          <div className="form-floating">
            <input
              type={field.type}
              className="form-control"
              id={field.id}
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleChange}
            />
            <label htmlFor={field.id}>{field.label}</label>
          </div>
        </div>
      ))}
      <div className="col-12">
        <button className="btn btn-primary py-3 px-5" type="submit">
          Send Message
        </button>
      </div>
    </div>
  </form>
);

const socialMediaLinks = [
  { url: "https://twitter.com/kalutu_daniel", icon: "fab fa-twitter" },
  { url: "https://www.facebook.com/kalutudaniel", icon: "fab fa-facebook-f" },
  { url: "https://github.com/Kalutu", icon: "fab fa-github" },
  { url: "https://www.linkedin.com/in/kalutu-daniel/", icon: "fab fa-linkedin-in" },
];

const formFields = [
  { id: "name", type: "text", width: 6, label: "Your Name", placeholder: "Your Name" },
  { id: "email", type: "email", width: 6, label: "Your Email", placeholder: "Your Email" },
  { id: "subject", type: "text", width: 12, label: "Subject", placeholder: "Subject" },
  {
    id: "message",
    type: "textarea",
    width: 12,
    label: "Message",
    placeholder: "Leave a message here",
  },
];
