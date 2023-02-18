import React from 'react'
import Avatar from "./Avatar";
import TopIntroduction from "./TopIntroduction";
const topLayout = function (){
    const imageUrl = "./pxArt.png";
    const heading='Hi, my name is Vlad'
    const paragraphs = ['I am a Front-end developer with one year experience and a passion for creating innovative and user-friendly applications. ' +
    '','I know how to work in fast-paced environments and to be client-oriented due to my previous experience as Senior in consulting and proficiency in English.']
    return(
        <div className='centered-box'>
        <Avatar imageUrl={imageUrl}/>
        <TopIntroduction heading={heading} paragraphs={paragraphs}/>
        </div>
    )
}
export default topLayout