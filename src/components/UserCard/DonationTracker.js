import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Event } from "../Tracking";

function DonationTracker(props){

 const [donated, setDonated] = useState({
        status: false,
        message: "I donated!",
        amount: "",
        done: "Tell us how much?",
        submitted: false
      })
    
    const handleStatus = (e) => {
        const target = e.target
        const value = target.name === 'amount' ? target.value : target.checked
        const name = target.name
        setDonated({
            ...donated,
            [name]: value,
        })
        console.log(value)
    }


    //   function thanksRandomizer() {
    //     const thanks = ['Thank you!🙏', 'Amazing! 🕺🏿', 'Radical! 👍🏿', 'Nice! ❤️', 'Excellent 🤗', 'Whoop! 🏄‍♂️🏄‍♂️', '👼🏽👼🏽👼🏽👼🏽', 'Omg thank you! 🌻']
    //     const randomthanks = thanks[Math.floor(Math.random() * thanks.length)]
    //     return randomthanks
        
    // }
    function postDonation(){
        axios.put(
            `${process.env.REACT_APP_ANGELSAPIBASE}/people/${props.user.id}`,
            { "donationAmount": donated.amount },
          )
          .then(res => console.log(res))
          .catch(err => console.log(err.message))
          setDonated({
              ...donated,
              submitted: true,
              status: false,
              message: "Thank you!",

          });
          Event("Donation", "Donated", "Submit_Donation", `${donated.amount}`)
        }
    
    return(
        <div className="Donated">
                        {/* {donated.status? <p className="random-thanks">{thanksRandomizer()}</p>: null} */}
                            {donated.message}
                            <input 
                            type="checkbox"
                            name="status"
                            checked={donated.status}
                            onChange={handleStatus}/>
                            {donated.status? 
                            <p className="Howmuch">
                                <br/>
                                {donated.done}
                                </p>:null}
                            <label>
                            {donated.status?
                            <input
                            name="amount"
                            type="number"
                            placeholder="2000"
                            value={donated.amount} 
                            onChange={handleStatus} 
                            className="Input"/>:null}
                            </label><br/>
                            {donated.status? <button onClick={postDonation} className="Button">Submit</button>: null}
                            {donated.submitted? <p className="submit">You donated N{donated.amount} to {props.user.firstName}!</p>: null}
                    </div>
    
    )
}

export default DonationTracker