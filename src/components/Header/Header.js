import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import TextCenter from '../utilities/TextCenter/TextCenter'
import SocialShare from '../SocialShare/SocialShare'
import './Header.css'

function Header() {
    return (
        <Fragment>
            <div className="Linq">
                <NavLink exact activeClassName="active" className="Link" id="home" to='/'>Home</NavLink>
                <NavLink activeClassName="active" className="Link" to='/about'>About</NavLink>
                <NavLink activeClassName="active" className="Link" to='/faq'>FAQ</NavLink>
                <NavLink activeClassName="active" className="Link" to='/needhelp'>Need help</NavLink>
                <NavLink activeClassName="active" className="Link" to='/team'>Team</NavLink>
            </div>

            <TextCenter>
                <h1>Angels among us.</h1>
                <p>Share 'Angels among us' with your network!</p>
                <SocialShare
                    text={"Share kindness in these COVID-19 times. If you're financially stable during this COVID-19 crisis, consider making a small contribution to people who haven't been as lucky. Use this to get a randomly-generated list of ten people who need your help."}
                    url={window.location.href}
                    tag={"#AngelsAmongUs"}
                />
            </TextCenter>
        </Fragment>
    )
}

export default Header
