import React from 'react'
import './experience.css'
const Experience = function (){
    const workExperience = [
        {
            startDate: "October 2022",
            endDate: "Present",
            company: "IP Platonov",
            position: "Web Developer",
            tasks: [
                "Development of new functionality for the company's landing pages on React and CSS",
                "Optimization of front-end, improvement of semantics, adding responsiveness and cross-browser compatibility",
                "Participation in planning tasks to improve the front-end",
                "Analyzing of code for a junior developer",
                "Implementation of new features at the request of the client",
                "Creating of new components",
                "Developing and coding in English",
                "Handling of business correspondence directly with clients in Russian and English",
                "Experience working in teams with Git",
                "Work with tests",
            ],
        },
        {
            startDate: "February 2022",
            endDate: "August 2022",
            company: "EY Russia",
            position: "Front-end Developer",
            tasks: [
                "Development of React components in English for the application to collect personal client information through forms",
                "Participation in designing of the front-end of the application for clients",
                "Coordination between the IT department and the business department regarding application development",
                "Cross-browser and responsive layout based on mockups",
                "Code review",
            ],
        },
    ];
     return (
         <div className='centered-box '>
             <div className="work-experience container spacing-150">
            {workExperience.map((job) => (
                <div key={job.company} className="job">
                    <h3>
                        {job.startDate} - {job.endDate}
                    </h3>
                    <h3>{job.duration}</h3>
                    <h3>{job.company}</h3>
                    <h4>{job.position}</h4>
                    <ul>
                        {job.tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                    <hr/>

                </div>
            ))}
        </div>

         </div>
    );

}
export default Experience