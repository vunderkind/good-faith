import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './UserCard.css'
import Button from '../utilities/Button/Button';

function UserCard(props) {
    const [state, setState] = useState({ copied: false, message: 'Copy account number' })
    let user = props.user;
    function getAccountErrorEmailHref(user) {
        return ("mailto:thevunderkind@gmail.com?subject=Problem with account on angelsamong.us&body=Hello, I had a problem transferring to " + user.accountNumber + ", " + user.bankName);
    }

    return (
        <div className="userCard">
            <h2 style={{ fontSize: '15px' }}><span>{user.firstName} {user.lastName}</span> ({user.location})</h2>
            <hr />
            <h3>"{user.context}"</h3>
            <details>
                <summary><span style={{ fontSize: '17px' }}>Tap for account info</span></summary>
                <strong>{user.accountNumber}</strong> <br /> {user.bankName}
                <br />
                <div className="interact">
                    <CopyToClipboard text={user.accountNumber}
                        // eslint-disable-next-line no-sequences
                        onCopy={() => (setState({ copied: true, message: 'Copied!' }), setTimeout(() => { setState({ message: 'Copy account number' }) }, 500))}
                    >
                        <Button type="primary">{state.message}</Button>
                    </CopyToClipboard>
                    &nbsp;
                    <div className="Report">
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href={getAccountErrorEmailHref(user)}
                            className="red-text"
                        >
                            Report problem with details
                    </a>
                    </div>
                </div>
            </details>
        </div>
    )
}

export default UserCard