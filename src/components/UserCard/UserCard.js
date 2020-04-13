import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
<<<<<<< HEAD:src/components/UserCard.js
import axios from 'axios'

=======
import './UserCard.css'
import Button from '../utilities/Button/Button';
>>>>>>> ad3a75b2d9d74b4c93b446cb752a72e801e4b46a:src/components/UserCard/UserCard.js

function UserCard(props) {
    const handleStatus = (e) => {
        const target = e.target
        setDonated({status: target.checked})
        console.log(target.checked)
    }

    function thanksRandomizer() {
        const thanks = ['Thank you so much!🙏', 'Amazing! 🕺🏿', 'That\'s rad! 👍🏿', 'Thank you! ❤️', 'You\'re a lifesaver! 🤗', 'The world is lucky to have you in it! 🏄‍♂️🏄‍♂️']
        const randomthanks = thanks[Math.floor(Math.random() * thanks.length)]
        return randomthanks
        
    }

    
    async function postDonation(){
    const response = await axios.put(
        `https://good-faith.herokuapp.com/api/people/29`,
        { donationAmount: "1000.00" },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(res => console.log(res))
      .catch(err => response.error)
    }

      const [donated, setDonated] = useState({
        status: false,
        message: "Tell us how much?"
      })
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
                    <div className="col-m-50 col-100">
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href={getAccountErrorEmailHref(user)}
                            className="red-text"
                        >
                            Report problem with details
                        </a>
                    </div>
                    <div className="Donated">
                        <label>
                            I donated! 
                            <input type="checkbox" 
                            name="donated" 
                            value={donated.status} 
                            onChange={handleStatus}></input>
                            </label>
                            {donated.status? <p>{thanksRandomizer()}</p>: null}
                            <label>
                            Tell us how much you donated
                            <input type='text'></input>
                            <button onClick={postDonation}>Submit</button>
                            </label>
                    </div>
                </div>
            </details>
        </div>
    )
}

export default UserCard