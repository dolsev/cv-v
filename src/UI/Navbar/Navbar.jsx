import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = ()=>{
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <button onClick={()=>setIsNavExpanded(!isNavExpanded)} className="hamburger">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    />
                </svg>
            </button>
            <div
                className={isNavExpanded?'navigation-menu expanded':'navigation-menu'}>
                <ul>
                    <li onClick={()=>setIsNavExpanded(!isNavExpanded)}>
                        <Link to='/'>My Skills</Link>
                    </li>
                    <li onClick={()=>setIsNavExpanded(!isNavExpanded)}>
                        <Link to='/experience'>Experience&Education</Link>
                    </li>
                    {/*
                        <li onClick={()=>setIsNavExpanded(!isNavExpanded)}>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    */}
                    <li onClick={()=>setIsNavExpanded(!isNavExpanded)}>
                        <Link to='/personal'>Personal</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default Navbar