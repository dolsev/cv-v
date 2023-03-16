import React,{useState} from "react";

const Icons = () => {
    const [showResumeMenu, setShowResumeMenu] = useState(false);
    const handleResumeClick = () => {
        setShowResumeMenu(!showResumeMenu);
    };

    return (
<div className='icons'>
    <div className='resume-box'>
    <button className='resume-button' onClick={handleResumeClick}>Resume</button>
    {showResumeMenu && (
        <div className='button-menu'>
            <div className='buttons'>
            <a className='language-button' href="/Смирнов%20Владислав_Frontend_Developer.pdf">Русский</a>
            <hr className='hr-button' />
            <a className='language-button' href="/Smirnov_Vladislav_Frontend_Developer_React.pdf">English</a>
            </div>
        </div>

    )}
    </div>
            <a className='icon' href="https://github.com/dolsev?tab=repositories"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>
            <a className='icon' href="https://www.linkedin.com/in/vladislav-smirnov-914048154/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
            <a className='icon' href="https://hh.ru/resume/b476fa48ff0b21c62f0039ed1f763861665349"><img src="https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png" alt="HeadHunter.ru" /></a>
            <a className='icon' href="https://www.instagram.com/andrey.da/"><img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Instagram" /></a>
            <a className='icon' href="https://www.codewars.com/users/dolsev"><img src="https://docs.codewars.com/logo.svg" alt="CodeWars" /></a>
            <a className='icon' href="mailto:vladislav.smirnov.work@yandex.ru"><img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" /></a>

</div>

    );
};

export default Icons;