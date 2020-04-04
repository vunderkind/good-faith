import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"

function Button(props) {
    return props.onClick ?
        <button 
            className={"btn btn-" + props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
        :
        props.externalLink ?
            <a 
                className={"btn btn-" + props.type}
                href={props.externalLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.children}
            </a>
            :
            <Link 
                className={"btn btn-" + props.type}
                to={props.link}
            >
                {props.children}
            </Link>
}

export default Button