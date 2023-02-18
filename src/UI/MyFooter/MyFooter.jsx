import React from "react";
import './myfooter.css'
import Icons from "../../components/Icons";

const MyFooter = ()=>{
    return(
        <div className='centered-box'>
        <div className='my-footer'>
        <Icons className='footer-icons'/>
            <p className='copyright-text'>  © 2023 Vladislav Smirnov</p>
        </div>
        </div>
    )
}
export default MyFooter
