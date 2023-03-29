import React from 'react'
import {Link} from "react-router-dom";

const Projects = function (){
        return <div className='centered-box'>
            <div className='container'>
            <h3>My portfolio:</h3>
                <div className='projects'>
                    <div className='project'>
                        <hr/>
                        <Link className='projLink' to={'https://cozy-furniture-ru.netlify.app/'}>
                        <div className='projDescription'>
                            <h3>FURNITURE E-COMMERCIAL</h3>
                            <p>A furniture web-store website is an online platform that allows users to purchase a furniture.
                                Filters, routing, Redux cart functionality and web-site design.</p>
                            <p><strong>React-SCSS-Redux</strong></p>
                        </div>
                        <img className='imgProject' alt='Furniture e-commercial' src='/furniture-pic.jpg'/>
                        </Link>
                        <a className='icon' href="https://github.com/dolsev/cozy_furniture"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />Code</a>
                    </div>
                    <hr/>
                    <div className='projects'>
                        <div className='project'>
                            <Link className='projLink' to={'https://dolsev.github.io/bookapp-search/'}>
                                <div className='projDescription'>
                                    <h3>BOOK-SEARCH</h3>
                                    <p>Website, allowing users to look for their favourite books included into Google Book API. Comes with sorting and filtering functionality along with means to check detailed description of the books.</p>
                                    <p><strong>React-Redux-API</strong></p>
                                </div>
                                <img className='imgProject' alt='BookSearch' src='/BookSearch.png'/>
                            </Link>
                            <a className='icon' href="https://dolsev.github.io/bookapp-search/"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />Code</a>
                        </div>
                    </div>
                    <hr/>
                    <div className='project'>
                        <Link className='projLink' to={'https://fight-worlds.netlify.app//'}>
                            <div className='projDescription'>
                                <h3>FW GAMING</h3>
                                <p>A landing selling page for game-developers company with presentation of investors and Roadmap for development process.
                                    </p>
                                <p><strong>React-Styled Components</strong></p>
                            </div>
                            <img className='imgProject' alt='FW GAMING' src='/gamedev-pic.png'/>
                        </Link>
                        <a className='icon' href="https://github.com/dolsev/game-website"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />Code</a>

                    </div>
                    <hr/>
                    <div className='projects'>
                        <div className='project'>
                            <Link className='projLink' to={'https://dolsev.github.io/potteriana-characters/'}>
                                <div className='projDescription'>
                                    <h3>POTTER CHARACTERS</h3>
                                    <p>A simple app, which allows you to choose your favourite characters from Harry Potter and filter them by your likes. You can even delete them entirely :).</p>
                                    <p><strong>React-Redux-LocalStorage</strong></p>
                                </div>
                                <img className='imgProject' alt='POTTER CHARACTERS' src='/hp-pic.png'/>
                            </Link>
                            <a className='icon' href="https://github.com/dolsev/potteriana-characters"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />Code</a>
                        </div>
                    </div>
                    <hr/>
                    <div className='projects'>
                        <div className='project'>
                            <Link className='projLink' to={'https://phenomenal-heliotrope-4f6d1e.netlify.app/'}>
                                <div className='projDescription'>
                                    <h3>CHAT EZ</h3>
                                    <p>A chat micro-service built for web-site based on API.</p>
                                    <p><strong>React-SCSS-API</strong></p>
                                </div>
                                <img className='imgProject' alt='CHAT EZ' src='/chat-pic.jpg'/>
                            </Link>
                            <a className='icon' href="https://chat-ez.netlify.app/"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />Code</a>
                        </div>

    </div>
        </div>
        </div>
        </div>
}
export default Projects