import React from "react"

export default function Intro(){
    return (
        <section id="projects">
            <h2 className="title">Projects</h2>
            <p>Here are some of my projects:</p>
            <div className="flex">
                <div className="project-title">
                    <figure>
                    <a href="https://www.fatmakproconsultancy.com/" target="_blank">
                        <img className="image" src="img/fatmak.jpg" alt="fatmak website preview"/>        
                    </a>
                    <figcaption><a href="https://www.fatmakproconsultancy.com/" target="_blank">Fatmak Consultacy</a></figcaption>
                    <h6 className="description">This is a website for the Fatmak Pro Consultacy, which is a training and consultancy services firm based in Nairobi, Kenya.</h6>
                    </figure>
                </div>

                <div className="project-title">
                    <figure>
                    <a href="https://quiz-app-kalutu.vercel.app/" target="_blank">
                        <img className="image" src="img/quiz-app.jpg" alt="quiz-app"/>
                    </a>
                    <figcaption><a href="https://quiz-app-kalutu.vercel.app/" target="_blank">Quiz Application</a></figcaption>
                    <h6 className="description">This is a simple quiz application that presents multiple-choice questions and allows users to select their answers.</h6>
                    </figure>
                </div>

                <div className="project-title">
                    <figure>
                    <a href="https://task-master-chi.vercel.app/" target="_blank">
                        <img className="image" src="img/task-master.jpg" alt="task-master"/>
                    </a>
                    <figcaption><a href="https://task-master-chi.vercel.app/" target="_blank">Task Master</a></figcaption>
                    <h6 className="description">This is a simple to-do list application that allows you to add, mark, and delete tasks.</h6>
                    </figure>
                </div>

                <div className="project-title">
                    <figure >
                    <a href="https://time-master-sigma.vercel.app/" target="_blank">
                        <img className="image" src="img/time-master.jpg" alt="25+5 Clock"/>
                    </a>
                    <figcaption><a href="https://time-master-sigma.vercel.app/" target="_blank">25+5 Clock</a></figcaption>
                    <h6 className="description">This is a timer application built using React. It allows users to set the length of a session and break time and provides a countdown timer.</h6>
                    </figure>
                </div>

                <div className="project-title">
                    <figure>
                    <a href="https://makeiam.vercel.app/" target="_blank">
                        <img className="image" src="img/make-i-am.jpg" alt="make-i-am website"/>
                    </a>
                    <figcaption><a href="https://makeiam.vercel.app/" target="_blank">Make I am</a></figcaption>
                    <h6 className="description">This is a website for the profile page of MAKE I AM, a rapper and singer-songwriter.</h6>
                    </figure>
                </div>

                <div className="project-title">
                    <figure>
                    <a href="https://random-quote-machine-kalutu.vercel.app/" target="_blank">
                        <img className="image" src="img/quote-machine.jpg" alt="quote-machine"/>
                    </a>
                    <figcaption><a href="https://random-quote-machine-kalutu.vercel.app/" target="_blank">Random Quote Machine</a></figcaption>
                    <h6 className="description">This is a simple React application that displays inspirational quotes each time you click the "New Quote" button</h6>
                    </figure>
                </div>
            </div>
            <div className="button">
            <   button><a href="https://github.com/Kalutu" target="_blank">See All</a></button>
            </div>
        </section>       
    )
}