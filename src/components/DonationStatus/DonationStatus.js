import React, { useState, Fragment, useEffect } from 'react';
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DonationStatus.css';
import TextCenter from '../utilities/TextCenter/TextCenter';
import Button from '../utilities/Button/Button';

function DonationStatus() {
    let { ref } = useParams();
    const [donation, setDonation] = useState(false)

    useEffect(() => {
        const validateUrl = "https://good-faith-staging.herokuapp.com/api/v1/donations/status";
        axios.post(validateUrl, {reference: ref})
            .then(apiResponse => {
                if( apiResponse.status === 200 ){
                    setDonation(apiResponse.data);
                }
            }).catch(e => {
                window.location.href = `/`;
            })
    }, [ref])

    return (
        <div className="App">
            {!donation ? <Loader className="Loader"
                type="BallTriangle"
                color="#008000"
                height={40}
                width={40}
              /> : 
              <Fragment>
                  <TextCenter>
                    <hr />
                    <p>Thank you for donating {donation.donor}. Here's your donation summary</p>
                    <h1>Donation Status: {donation.status}</h1>
                    <p>Reference: {donation.reference}</p>

                    <p>Amount: NGN {donation.amount}</p>

                    <div>
                        <h3>Recipients</h3>
                        {donation.beneficiaries.map(recipient => <p>{recipient.firstName} {recipient.lastName}</p>)}
                    </div>

                    <Button type="primary" link="/">Go Home</Button>

                  </TextCenter>
              </Fragment>}
        </div>
    )
}

export default DonationStatus;