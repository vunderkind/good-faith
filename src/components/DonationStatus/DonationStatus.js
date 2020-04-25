import React, { useState, Fragment, useEffect } from 'react';
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DonationStatus.css';
import TextCenter from '../utilities/TextCenter/TextCenter';
import Button from '../utilities/Button/Button';
import SocialShare from '../SocialShare/SocialShare';

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
                    <p>Thank you for donating! Here's your donation summary</p>
                    <h1>Donation Status: {donation.status}</h1>
                    <p>Reference: {donation.reference}</p>

                    <p>Amount: NGN {donation.amount}</p>
                    <p>Processing Fee: NGN {donation.fee}</p>

                    <div>
                        <h3>Recipients</h3>
                        {donation.beneficiaries.map(recipient => <p>{recipient.firstName} {recipient.lastName} - NGN {recipient.amtRecvd}</p>)}
                    </div>

                    <Button type="primary" link="/">Go Home</Button>
                    <p>Share with your network!</p>
                    <SocialShare
                        text={"I just donated to some people who have been impacted by COVID-19. You can use this to get a randomly-generated list of three people who need your help."}
                        url={window.location.origin}
                        tag={"#AngelsAmongUs"}
                    />

                  </TextCenter>
              </Fragment>}
        </div>
    )
}

export default DonationStatus;