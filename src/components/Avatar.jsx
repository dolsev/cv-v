import React from "react";

const Avatar = ({imageUrl}) => {
    return (
        <div className='avatar-div' >
            <img src={imageUrl} alt="Avatar" className='avatar'/>
            <img src='https://img.hhcdn.ru/photo/688977644.jpeg?t=1677788368&h=E2uhylBHlUvKLi8Dk9vTKw' alt="Avatar2" className='avatar2'/>
        </div>

    );
};

export default Avatar;