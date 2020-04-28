import React, { useState, Fragment, useEffect } from 'react';
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DonationStatus.css';
import TextCenter from '../utilities/TextCenter/TextCenter';
import Button from '../utilities/Button/Button';
import SocialShare from '../SocialShare/SocialShare';
import Popup from '../utilities/Popup/Popup';

function DonationStatus() {
    let { ref } = useParams();
    const [donation, setDonation] = useState(false)
    const [showPopup, setshowPopup] = useState(false)
    const togglePopup = () => {
        setshowPopup({
          showPopup: !showPopup
        });
      }
    

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
                    <p>Thank you for donating, {donation.donorName? donation.donorName: 'Anonymous Angel'}! Here's your donation summary</p>
                    <h1>Donation Status: {donation.status}</h1>
                    <p>Reference: {donation.reference}</p>

                    <p><strong>You donated:</strong> NGN {donation.amount}</p>
                    <p><strong>Payment Processor Fee: </strong>NGN {donation.fee}<br/><a href="https://flutterwave.com/us/pricing">(About this)</a></p> 

                    {
                    donation.cbnstampdutycharge ?
                    <p><strong>CBN Stamp Duty Charge:</strong> NGN {donation.cbnstampdutycharge}<br/><button onClick={togglePopup}>(Details)</button></p> : null
                    }
                    <br/>
                    <hr/>
                    <div>
                        <h2>You've just helped:</h2>
                        {donation.beneficiaries.map(recipient => <p className="helped"><strong>{recipient.firstName} {recipient.lastName}</strong> - NGN {recipient.amtRecvd} ~~~~~<a href={`sms:${recipient.phone}?&body=Hey ${recipient.firstName}! My name is ${donation.donorName? donation.donorName: 'Anon'}, and I just made a donation to you via Angels Among Us. Stay healthy and keep your spirits up as we work to beat COVID-19!`}>Send {recipient.firstName} an SMS?</a></p>)}
                        
                    </div>
                    <br/>
                    <Button type="primary" link="/">Go Home</Button>
                    <p>Share your donation story!</p>
                    <SocialShare
                        text={`I've just donated ${donation.amount} to people who've been economically affected by COVID-19. You can, too, by visiting https://angelsamong.us. We can win!`}
                        url={window.location.origin}
                        tag={"#AngelsAmongUs"}
                    />
                    {showPopup ? 
                    <Popup
                        headline='Close Me'
                        summary='Something'
                        closePopup={togglePopup}
                    />
                        : null
                    }
                  </TextCenter>
              </Fragment>}
        </div>
    )
}

export default DonationStatus;