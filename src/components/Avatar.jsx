import React from 'react'

function Avatar(props) {
    console.log(props);
    return (
        <img
            className="circle-img"
            src={props.scr}
            alt="avatar_img"
        />
    )
}

export default Avatar