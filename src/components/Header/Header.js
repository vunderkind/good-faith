import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import TextCenter from '../utilities/TextCenter/TextCenter'
import SocialShare from '../SocialShare/SocialShare'
import './Header.css'

function Header() {
    return (
        <Fragment>
            <div className="Linq">
                <NavLink exact activeClassName="active" className="Link" id="home" to='/'>Angels Among <span className="redden">Us</span></NavLink>
            </div>

            <TextCenter>
                <p>Share <strong>Angels Among Us</strong> with your network!</p>
                <SocialShare
                    text={"Share kindness in these COVID-19 times. If you're financially stable during this COVID-19 crisis, consider making a small contribution to people who haven't been as lucky. Use this to get a randomly-generated list of three people who need your help."}
                    url={window.location.origin}
                    tag={"#AngelsAmongUs"}
                />
            </TextCenter>
        </Fragment>
    )
}

export default Header
