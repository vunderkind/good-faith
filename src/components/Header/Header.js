import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import TextCenter from '../utilities/TextCenter/TextCenter'
import SocialShare from '../SocialShare/SocialShare'
import './Header.css'

function Header() {
    return (
        <Fragment>
            <div className="HeaderLinks">
                <NavLink exact className="Link active" id="home" to='/'>Angels Among <span className="redden">Us</span></NavLink>

                <div className="HeaderLinks-SubLinks">
                    <NavLink activeClassName="active" className="Link" to='/about'>About</NavLink>
                    <NavLink activeClassName="active" className="Link" to='/faq'>FAQ</NavLink>
                    <NavLink activeClassName="active" className="Link" to='/needhelp'>Need help</NavLink>
                    <NavLink activeClassName="active" className="Link" to='/team'>Team</NavLink>
                </div>
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
