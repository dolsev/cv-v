import React from 'react'
import './myskills.css'

const skills = [
    { name: 'Java-Script', hearts: 5, emptyHearts:2  },
    { name: 'React', hearts: 4, emptyHearts: 3 },
    { name: 'CSS', hearts: 5, emptyHearts: 2 },
    { name: 'English', hearts: 7 },
    { name: 'npm-router', hearts: 3, emptyHearts: 4 },
    { name: 'Webpack', hearts: 5, emptyHearts: 2 },
    { name: 'Git', hearts: 5, emptyHearts: 2 },
    { name: 'Figma', hearts: 3, emptyHearts: 4 },
    { name: 'Photoshop', hearts: 5, emptyHearts: 2 }
];

const otherSkills = [
    "Business-correspondence",
    'AI toolset usage',
    'Responsibility',
    "Communication on the fly",
    "Problem-solving",
    "Feedback",
    "Mentoring",
];

function Skill({ name, hearts, emptyHearts = 0 }) {
    const fullHearts = Array(hearts).fill('★');
    const emptyHrts = Array(emptyHearts).fill('☆');

    return (
        <div className="skill">
            <div className="skill-name">{name}</div>
            <div className="skill-hearts">
                {fullHearts.map((heart, index) => <span key={index} className="heart">{heart}</span>)}
                {emptyHrts.map((heart, index) => <span key={index} className="heart">{heart}</span>)}
            </div>
        </div>
    );
}
function SkillsList({ skills }) {
    return (
        <div className="skills-list">
            {skills.map((skill, index) => <Skill key={index} {...skill} />)}
        </div>
    );
}

const MySkills = ()=>{

    return(

<div className='centered-box'>
    <div className='container'>
        <div><h1 className='section-name'>My Skills</h1></div>
        <div className="skills-container">
            <SkillsList skills={skills} />
        </div>
        <div className="other-skills">
            <h3>Soft Skills:</h3>
            {otherSkills.map((skill, index) => <p key={index}>{skill}</p>)}
    </div>

    </div>

</div>
        )


}
export default MySkills