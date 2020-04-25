import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './UserCard.css'
import Button from '../utilities/Button/Button';
// import axios from 'axios'
import DonationTracker from './DonationTracker'

function UserCard(props) {
    //State lives here
    const [state, setState] = useState({ copied: false, message: 'Copy account number' })
    
    
    let user = props.user;
    function getAccountErrorEmailHref(user) {
        return ("mailto:thevunderkind@gmail.com?subject=Problem with account on angelsamong.us&body=Hello, I had a problem transferring to " + user.accountNumber + ", " + user.bankName);
    }

    return (
        <div className="userCard">
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.location}</p>
            <hr />
            <p><i>"{user.context}"</i></p>
            <details>
                <summary><span style={{ fontSize: '17px' }}>Tap for account info</span></summary>
                <strong>{user.accountNumber}</strong> <br /> {user.bankName}
                <br />
                <div className="interact row align-items-center text-center">
                    <div className="col-m-50 col-100">
                        <CopyToClipboard text={user.accountNumber}
                            // eslint-disable-next-line no-sequences
                            onCopy={() => (setState({ copied: true, message: 'Copied!' }), setTimeout(() => { setState({ message: 'Copy account number' }) }, 500))}
                        >
                            <Button type="primary">{state.message}</Button>
                        </CopyToClipboard>
                    </div>
                    <br/>
                    <div className="col-m-50 col-100">
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href={getAccountErrorEmailHref(user)}
                            className="red-text"
                        >
                            
                            Report problem with details
                        </a>
                        <br/>
                    </div>
                    <DonationTracker user={user}/>
                    
                </div>
            </details>
        </div>
    )
}

export default UserCard