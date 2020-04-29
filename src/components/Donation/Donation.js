import React, { useState } from 'react';
import axios from 'axios';
import TextCenter from '../utilities/TextCenter/TextCenter.js';
import Payment from '../Payment/Payment.js';
import './Donation.css';

function Donation( props ) {
    let recipients = props.recipients;

    const [donationAmount, setDonationAmount] = useState(0)
    const [donorEmail, setDonorEmail] = useState(getRandomEmail)
    const [donorName, setdonorName] = useState('Anon')
    const [isAnon, setIsAnon] = useState(true)
    const [raveConfig, setRaveConfig] = useState(false);
    const [donationRef, setDonationRef] = useState("");

    

    async function initiateDonation(event) {
        event.preventDefault();

        // call backend api to get donation hash
        const txnRef = await getTransactionReference();
        if ( !txnRef ) {
            return;
        }
        setDonationRef(txnRef);

        // populate subaccounts with ratio
        const subaccounts = packageRecipientSubAccounts();
        const flw_publickey = process.env.REACT_APP_FLWPUBLICKEY;

        // generate configuration values for rave
        let flw_config = {
            PBFPubKey: flw_publickey,
            customer_email: donorEmail,
            amount: donationAmount,
            currency: "NGN",
            txref: txnRef,
            subaccounts: subaccounts,
            production: process.env.REACT_APP_ISPROD === "TRUE" ? true : false,
        }
        setRaveConfig(flw_config);
    }

    /**
     * Makes request to validate a donation
     * 
     * Redirect the user to a status page if donation is successful!
     */
    async function validateDonation(){
        const validateUrl = `${process.env.REACT_APP_ANGELSAPIBASE}/donations/status`;

        try {
            const apiResponse = await axios.post(validateUrl, {reference: donationRef});

            if( !apiResponse || apiResponse.status !== 200 ) {
                let error_message = "Sorry - an error occured processing your donation.\n";
                error_message += `Please reach out to angelsamongusbot@gmail.com with reference:${donationRef}`;
                alert(error_message);
                handlePostDonation();
            } else if( apiResponse.data.status !== "SUCCESS" ) {
                let error_message = "Your donation one-click donation attempt was unsuccessful!\n";
                error_message += `To dispute this, Please reach out to angelsamongusbot@gmail.com with reference number:${donationRef}`;
                alert(error_message);
                handlePostDonation();
            } else{
                // if payment is successful, send the user to donation page
                window.location.href = `/donations/${donationRef}`;
            }
        } catch (error) {

            let api_error_message = "Sorry, there was an error validating your donation\n"
            api_error_message += `Please reach out to angelsamongusbot@gmail.com with reference:${donationRef}\n`
            alert(api_error_message);
            handlePostDonation();

        }
    }

    /**
     * There's currently some quirky behavior in which the rave
     * modal library fails to render again after it's been rendered once
     * on a page. To mitigate, we just trigger a page reload.
     * 
     * This will only affect users who open the rave modal and don't complete
     * the payment. Will need to invest some time root cause
     */
    function handlePostDonation() {
        window.location.reload()
    }

    /**
     * Populates recipients sub account using format specified here:
     * 
     */
    function packageRecipientSubAccounts() {
        let result = [];

        recipients.forEach(recipient => {
            result.push({
                'id': recipient.subaccount,
                'transaction_split_ratio': 1
            })
        });

        return result;
    }

    /**
     * This function is responsible for returning an array with
     * just beneficiary ids
     */
    function getBeneficiaryIds() {
        let result = [];

        recipients.forEach(recipient => {
            result.push( recipient[ "_id" ] )
        });

        return result;
    }

    /**
     * Calls donation api to generate a donation reference for user
     * 
     */
    async function getTransactionReference() {
        if(!(parseInt(donationAmount))){
            let message = "Sorry - looks like you didn't put in a donation amount.\n"
            alert(message);
            return null;
        }

        else if ( (parseInt(donationAmount)) <= 999 ) {
            let message = "This feature works best if you donate at least N1000.\n"
            message += "This is because we split your donation evenly among 5 recipients. \n"
            alert(message);
            return null;
        }

        const donationApiUrl = `${process.env.REACT_APP_ANGELSAPIBASE}/donations`;

        const beneficiaryIds = getBeneficiaryIds(); 

        const body = {
            "donorEmail": donorEmail,
            "donorName": donorName,
            "amount": donationAmount,
            "beneficiary_ids": beneficiaryIds,
            "source": "FLUTTERWAVE"
        }

        let api_error_message = "Sorry, there was an error processing your request\n"
        api_error_message += "Please reach out to angelsamongusbot@gmail.com if this persists. Thanks! \n"

        try {
            const apiResponse = await axios.post( donationApiUrl, body );

            if( apiResponse.status !== 200 ) {
                alert(api_error_message);
                return null;
            }

            const donationRef = apiResponse.data.reference;
            return donationRef;
        } catch(error) {
            alert(api_error_message);
            return null;
        }
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
                <div className="featurebanner"><strong>New:</strong> Easy donate feature! <span role="img" aria-label="hand pointing downwards">👇🏿</span></div>
                <form onSubmit={initiateDonation}>
                    <label className="donation-input-section">
                        <h2>How much (in Naira) do you want to donate?</h2>
                        <p>The amount will be split equally between the recipients listed below.</p>
                        <input className="Input" type='number' name="donationAmount" onChange={event => setDonationAmount(event.target.value)} placeholder="5000"></input>
                        
                    </label>

                    <label className="donation-input-section">
                        <p>Share your details?</p>
                        <input type="checkbox" 
                        onChange={event => setIsAnon(event.target.checked ? false : true)}></input>
                    </label>
                    <br/>
                    {!isAnon ?
                        <label className="donation-input-section">
                            <p>Name</p>
                            <input className="Input" 
                            type='text' 
                            name="donorName" 
                            onChange={event => setdonorName(event.target.value)} 
                            placeholder="Your name"></input>

                            <p>Email address</p>
                            <input type="email"
                            pattern="[^ @]*@[^ @]*"
                            name="donorEmail"
                            placeholder="Your email address"
                            onChange={event => setDonorEmail(event.target.value)} className="Input"></input>
                            
                            
                        </label>
                    : null
                    }

                    {raveConfig ? null
                    :
                        <div className="submit-section">
                            <input className="btn btn-secondary black" type="submit" value="Start Donation" />
                        </div>
                    }

                </form>
            </TextCenter>

            {!raveConfig ? null
            : 
            <div className="pay-section">
                <button className="btn btn-danger abort-button" onClick={event => setRaveConfig(false)}>Cancel</button>

                <Payment config={raveConfig} triggerValidation={validateDonation} afterClose={validateDonation}></Payment>
            </div> 
            }

        </div>
    )
}

export default Donation