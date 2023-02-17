import React from "react";
import './mybutton.css'
const MyButton = ({children, ...props})=>{
    return(
        <button {...props} className='btn'> {children}</button>
    )
}
export default MyButton
