import React from "react";

const Avatar = ({imageUrl}) => {
    return (
        <div className='avatar-div' >
            <img src={imageUrl} alt="Avatar" className='avatar'/>
        </div>

    );
};

export default Avatar;