import React, { useState } from 'react';
import axios from 'axios';
import TextCenter from '../utilities/TextCenter/TextCenter.js';
import Payment from '../Payment/Payment.js';
import './Donation.css';

function Donation( props ) {
    let recipients = props.recipients;

    const [donationAmount, setDonationAmount] = useState(0)
    const [donorEmail, setDonorEmail] = useState(getRandomEmail)
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
        const flw_publickey = "FLWPUBK_TEST-4aa027b074b35d7017de3e8141784280-X"; // TODO: use env

        // generate configuration values for rave
        let flw_config = {
            PBFPubKey: flw_publickey,
            customer_email: donorEmail,
            amount: donationAmount,
            currency: "NGN",
            txref: txnRef,
            subaccounts: subaccounts,
            production: false, // TOOD: use env seperate PR
        }
        setRaveConfig(flw_config);
    }

    /**
     * Makes request to validate a donation
     * 
     * Redirect the user to a status page if donation is successful!
     */
    async function validateDonation(){
        const validateUrl = "https://good-faith-staging.herokuapp.com/api/v1/donations/status";

        const apiResponse = await axios.post(validateUrl, {reference: donationRef});

        if( !apiResponse || apiResponse.status !== 200 ) {
            let error_message = "Sorry an error occured processing your donation.\n";
            error_message += `Please reach out to angelsamongus@gmail.com with reference:${donationRef}`;
            alert(error_message);
            handlePostDonation();
        } else if( apiResponse.data.status !== "SUCCESS" ) {
            let error_message = "Donation attempt unsuccessful\n";
            error_message += `To dispute this, Please reach out to angelsamongus@gmail.com with reference:${donationRef}`;
            alert(error_message);
            handlePostDonation();
        } else{
            // if payment is successful, send the user to donation page
            window.location.href = `/donations/${donationRef}`;
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
        if ( (parseInt(donationAmount) || 0) <= 0 ) { //TODO: make this configurable
            alert("Please enter a valid donation amount in Naira");
            return null;
        }
        // TODO: move to env
        const donationApiUrl = "https://good-faith-staging.herokuapp.com/api/v1/donations";

        const beneficiaryIds = getBeneficiaryIds(); 

        const body = {
            "donor": donorEmail,
            "amount": donationAmount,
            "beneficiary_ids": beneficiaryIds,
            "source": "FLUTTERWAVE"
        }

        const apiResponse = await axios.post( donationApiUrl, body );
        if( apiResponse.status !== 200 ) {
            return null;
        }
        const donationRef = apiResponse.data.reference;

        return donationRef;
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
                    <label className="donation-input-section">
                        <p>How much in Naira do you want to donate?<br/>
                        The amount will be split equally among recipients listed below.</p>
                        <span className="donation-amount-input">
                            ₦<input type='number' name="donationAmount" onChange={event => setDonationAmount(event.target.value)}></input>
                        </span>
                    </label>

                    <label className="donation-input-section">
                        <p>Share email?</p>
                        <input type="checkbox" 
                        onChange={event => setIsAnon(event.target.checked ? false : true)}></input>
                    </label>

                    {!isAnon ?
                        <label className="donation-input-section">
                            <p>Email address</p>
                            <input type="email"
                            pattern="[^ @]*@[^ @]*"
                            name="donorEmail"
                            onChange={event => setDonorEmail(event.target.value)}></input>
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
                <button className="btn btn-danger abort-button" onClick={event => setRaveConfig(false)}>Abort</button>

                <Payment config={raveConfig} triggerValidation={validateDonation} afterClose={validateDonation}></Payment>
            </div> 
            }

        </div>
    )
}

export default Donation