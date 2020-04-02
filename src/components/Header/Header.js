import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import TextCenter from '../utilities/TextCenter/TextCenter'
import SocialShare from '../SocialShare/SocialShare'
import './Header.css'

function Header() {
    return (
        <Fragment>
            <div className="Linq">
                <Link className="Link" id="home" to='/'>Home</Link>
                <Link className="Link" to='/about'>About</Link>
                <Link className="Link" to='/faq'>FAQ</Link>
                <Link className="Link" to='/needhelp'>Need help</Link>
                <Link className="Link" to='/team'>Team</Link>
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
