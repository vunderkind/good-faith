import React from 'react'

function TextCenter(props) {
    return (
        <div className={props.className} style={{ textAlign:"center" }}>
            {props.children}
        </div>
    )
}

export default TextCenter