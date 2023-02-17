import React from "react";

const Avatar = ({imageUrl}) => {
    return (
        <div className='avatar-div' >
            <img src={imageUrl} alt="Avatar" className='avatar'>
            </img>
        </div>

    );
};

export default Avatar;