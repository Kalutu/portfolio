import React from "react"

export default function Intro(){
    return (
        <section id="contact" className="contact-section">
            <div className="contact-section-header">
                <h2>Let's work together...</h2>
                <p>How do you take your coffee?</p>
            </div>
            <div className="contact-links">
                <div>
                    <a href="https://www.linkedin.com/in/kalutu-daniel/" target="_blank"><i className="ri-linkedin-box-fill ri-4x"></i><p>LinkedIn</p></a>
                </div>
                
                <div>
                    <a href="https://github.com/Kalutu" target="_blank"><i class="ri-github-fill ri-4x"></i><p>Github</p></a>
                </div>
                
                <div>
                    <a href="mailto:kalutudaniel@gmail.com" target="_blank"><i class="ri-mail-fill ri-4x"></i><p>Email</p></a>
                </div>
                
                <div>
                    <a href="tel:+254713118765" target="_blank"><i class="ri-phone-fill ri-4x"></i><p>Phone</p></a>
                </div>
            </div>
        </section>
        
    )
}