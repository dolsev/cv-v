import React from 'react'
import './Projects.scss'
import {Link} from "react-router-dom";

const Projects = function (){
        return <div className='centered-box'>
            <div className='container'>
            <h3>My Recent Projects:</h3>
                <div className='projects'>
                    <div className='project'>
                        <Link className='projLink' to={'/https://amazing-parfait-82489c.netlify.app/'}>
                            <p>Game Developers Site Design and full Functionality</p>
                            <img className='imgProject' alt='' src='/gamedev-pic.png'/>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link className='projLink' to={'https://chimerical-flan-f94fec.netlify.app/'}>
                        <p>Furniture Web-Site Design and Functionality</p>
                        <img className='imgProject' alt='' src='/furniture-pic.jpg'/>
                        </Link>
                    </div>

                </div>
    </div>
        </div>
}
export default Projects