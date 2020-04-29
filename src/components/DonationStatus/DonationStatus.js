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
    const [showPopup2, setshowPopup2] = useState(false)
    function togglePopup() {
        setshowPopup(!showPopup);
      }
      function togglePopup2() {
        setshowPopup2(!showPopup2);
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
                    <p id="subdued">(Please note that it may take some time for your donation to reflect in the recipient's account.)</p>

                    <p><strong>You donated:</strong> NGN {donation.amount}</p>
                    <p><strong>Payment Processor Fee: </strong>NGN {donation.fee}
                    <Button type="secondary"
                    onClick={togglePopup2}>
                        Details
                    </Button></p>

                    {
                    donation.cbnstampdutycharge ?
                    <p><strong>CBN Stamp Duty Charge:</strong> NGN {donation.cbnstampdutycharge}
                    <Button type="secondary" onClick={togglePopup}>
                        Details
                        </Button>
                        </p> : null
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
                        text={`I've just donated ${donation.amount} to people who've been economically affected by COVID-19. You can, too, by visiting https://angelsamong.us. Anyone can be an angel!`}
                        url={window.location.origin}
                        tag={"#AngelsAmongUs"}
                    />
                    {showPopup ? <Popup headline='About the N50 CBN Stamp Duty'
                    summary='On September 17th, 2019, the Central Bank of Nigeria released a circular mandating a stamp duty fee of N50 on every transfer worth N1000 or more.'
                    closePopup={togglePopup}
                    context='https://flutterwave.com/us/blog/product-updates/cbns-stamp-duty-charge-a-flutterwave-merchants-guide'
                    />
                        : null}

                    {showPopup2 ? <Popup headline="Flutterwave's processing fees"
                    summary="Flutterwave charges a 2.9% processing fee for local transfers, and 3.8% for international transfers. Click the 'More details' link to read more about how Flutterwave's pricing works."
                    closePopup={togglePopup2}
                    context='https://flutterwave.com/us/pricing'
                    />
                        : null}
                  </TextCenter>
              </Fragment>}
        </div>
    )
}

export default DonationStatus;