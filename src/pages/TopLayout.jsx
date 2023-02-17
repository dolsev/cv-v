import React from 'react'
import Avatar from "../components/Avatar";
import TopIntroduction from "../components/TopIntroduction";
const topLayout = function (){
    const imageUrl = "./pxArt.png";
    const heading='Hi, my name is Vlad'
    const paragraphs = ['I am a Front-end developer with one year experience and a passion for creating innovative and user-friendly applications. ','A year ago I was a Senior Consultant at Tax in EY so I know how to work in fast-paced environments and be client-oriented.']
    return(
        <div className='centered-box'>
        <Avatar imageUrl={imageUrl}/>
        <TopIntroduction heading={heading} paragraphs={paragraphs}/>
        </div>
    )
}
export default topLayout