import React from 'react'
import Avatar from "./Avatar";
import TopIntroduction from "./TopIntroduction";
const topLayout = function (){
    return(
        <div className='centered-box top-layout'>
        <Avatar imageUrl={"./pxArt.png"}/>
        <TopIntroduction heading={'Front End React Developer'} paragraphs={['Hi, my name is Vlad Smirnov.',
            'A passionate Front-End React Developer with 1,5 years of development work experience and 5 years of High-level consulting experience.',['My technical stack:']]}/>
        </div>
    )
}
export default topLayout