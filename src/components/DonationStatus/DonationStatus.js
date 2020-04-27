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
        const validateUrl = `${process.env.REACT_APP_ANGELSAPIBASE}/donations/status`;
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
                color="#FF4444"
                height={40}
                width={40}
              /> : 
              <Fragment>
                  <TextCenter>
                    <hr />
                    <p>Thank you for donating! Here's your donation summary</p>
                    <h1>Donation Status: {donation.status}</h1>
                    <p>Reference: {donation.reference}</p>

                    <p><strong>You donated:</strong> NGN {donation.amount}</p>
                    <p><strong>Payment Processor Fee: </strong>NGN {donation.fee}<br/><a href="https://flutterwave.com/us/pricing">(About this)</a></p> 

                    {
                    donation.cbnstampdutycharge ?
                    <p><strong>CBN Stamp Duty Charge:</strong> NGN {donation.cbnstampdutycharge}<br/><a href='https://flutterwave.com/us/blog/product-updates/cbns-stamp-duty-charge-a-flutterwave-merchants-guide'>(Details)</a></p> : null
                    }
                    <br/>
                    <hr/>
                    <div>
                        <h2>You've just helped:</h2>
                        {donation.beneficiaries.map(recipient => <p className="helped"><strong>{recipient.firstName} {recipient.lastName}</strong> - NGN {recipient.amtRecvd} ~~~~~<a href={`tel:${recipient.phone}`}>(Let them know it was you?)</a></p>)}
                    </div>
                    <br/>
                    <Button type="primary" link="/">Go Home</Button>
                    <p>Share your donation story!</p>
                    <SocialShare
                        text={`I've just donated ${donation.amount} to people who've been economically affected by COVID-19. You can, too, by visiting https://angelsamong.us. We can win!`}
                        url={window.location.origin}
                        tag={"#AngelsAmongUs"}
                    />

                  </TextCenter>
              </Fragment>}
        </div>
    )
}

export default DonationStatus;