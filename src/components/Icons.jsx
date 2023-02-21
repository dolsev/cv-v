import React from "react";

const Icons = ({...props}) => {
    return (
<div {...props}>
    <a href="https://github.com/dolsev"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/vladislav-smirnov-914048154/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
            <a href="https://hh.ru/resume/b476fa48ff0b21c62f0039ed1f763861665349"><img src="https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png" alt="HeadHunter.ru" /></a>
            <a href="https://www.instagram.com/andrey.da/"><img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Instagram" /></a>
            <a href="mailto:vladislav.smirnov.work@yandex.ru"><img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" /></a>
</div>

    );
};

export default Icons;