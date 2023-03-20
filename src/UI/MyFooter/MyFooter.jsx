import React from "react";
import './myfooter.css'

const MyFooter = ()=>{
    return(
        <div className='centered-box'>
        <div className='my-footer'>
            <div className='icons'>
                <p className='copyright-text'>  © 2023 Vladislav Smirnov</p>

                <a className='icon' href="mailto:vladislav.smirnov.work@yandex.ru"><img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" /></a>
            <a className='icon' href="https://t.me/reactivdev"><img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" /></a>
            </div>
        </div>
        </div>
    )
}
export default MyFooter
