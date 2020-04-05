import React, { useState } from 'react'
import './Donation.css'
import TextCenter from '../utilities/TextCenter/TextCenter.js'
import Button from '../utilities/Button/Button'

function Donation( props ) {
    let recipients = props.recipients;

    const [donationAmount, setDonationAmount] = useState(0)
    const [donorEmail, setDonorEmail] = useState(getRandomEmail)
    const [isAnon, setIsAnon] = useState(true)

    function initiateDonation(event) {

        console.log("isAnon: " + isAnon);
        console.log("donation amount: " + donationAmount);
        console.log("donation email: " + donorEmail);
        console.log("recipients:   " + recipients[0].firstName + " " + recipients[1].firstName + " " + recipients[2].firstName );
        console.log( recipients );

        // call backend api to get donation hash

        // package details for rave inline

        // display
        event.preventDefault();
    }

    /**
     * Generates a random email for anonymous donors
     */
    function getRandomEmail() {
        let suffix = '@donor-angelsamong.us';
        let prefix = Math.random().toString(36).substr(2, 5);

        return prefix + suffix;
    }

    return (
        <div className="Donation">
            <TextCenter>
                <form onSubmit={initiateDonation}>
                    <label className="flex-justify-around">
                        How much in Naira do you want to donate?
                        <input type='number' name="donationAmount" onChange={event => setDonationAmount(event.target.value)}></input>
                    </label>

                    <label className="flex-justify-around">
                        Share email?
                        <input type="checkbox" 
                        onChange={event => setIsAnon(event.target.checked ? false : true)}></input>
                    </label>

                    {!isAnon ?
                        <label className="flex-justify-around">
                            Email address
                            <input type="email"
                            pattern="[^ @]*@[^ @]*"
                            name="donorEmail"
                            onChange={event => setDonorEmail(event.target.value)}></input>
                        </label>
                    : null
                    }

                    <p>The amount will be split equally among recipients listed below.</p>

                    <input type="submit" value="Submit" />
                </form>
            </TextCenter>
        </div>
    )
}

export default Donation