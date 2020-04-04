import React from 'react'
import "./SocialShare.css"

function SocialShare(props) {
    return (
        <div className="share-btns">
            <a
                href={"https://www.facebook.com/sharer/sharer.php?u=" + props.url + "&quote=" + encodeURI(props.text) + " " + props.tag + ""}
                className="social facebook btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-facebook-f"></i>
            </a>
            &nbsp;
            <a
                href={"https://twitter.com/intent/tweet?text=" + encodeURI(props.text) + "&url=" + props.url + "&hashtags=" + props.tag + ""}
                className="social twitter btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-twitter"></i>
            </a>
            &nbsp;
            <a
                href={"whatsapp://send?text=" + encodeURI(props.text) + " " + props.url + ""}
                className="social whatsapp btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
            &nbsp;
        </div>
    )
}

export default SocialShare