import React from 'react'

const Personal = function (){
    const bio = [
        "Before starting my career in IT, I worked as a Tax Consultant for 5 years at EY and resigned as experienced Senior Consultant.",
        "The best part of my work at EY was working with IT department, which started at the beginning of 2022 (I began to feel happy at work). Due to highly positive experience with my new role, I decided to become a developer and devote all my time to IT and everything related to it.",
        "I have been working in Front-End for more than a year. After working at EY, I completed the Web Development course with Angela Yu on Udemy and I continue to take courses in React/JS.",
        "I am constantly scrolling  DTF (there are even a couple of articles written by me) and Habr. I have been a PC nerd since I was 12 and I love it. I am also passionate about football, play the guitar, do video editing, and 3D modeling.",
    ];
    return <div className='centered-box'><div className='container spacing-150'>
        <h3>Personal</h3>
        {bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}

    </div></div>
}
export default Personal