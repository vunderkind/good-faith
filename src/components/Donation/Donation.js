import React, { useState } from 'react';
import axios from 'axios';
import './Donation.css';
import TextCenter from '../utilities/TextCenter/TextCenter.js';
import Payment from '../Payment/Payment.js';

function Donation( props ) {
    let recipients = props.recipients;

    const [donationAmount, setDonationAmount] = useState(0)
    const [donorEmail, setDonorEmail] = useState(getRandomEmail)
    const [isAnon, setIsAnon] = useState(true)
    const [raveConfig, setRaveConfig] = useState(false);
    const [donationRef, setDonationRef] = useState("");

    const donationApiurl = ""; // TODO: use env
    const flw_publickey = "FLWPUBK_TEST-4aa027b074b35d7017de3e8141784280-X"; // TODO: use env

    function initiateDonation(event) {
        event.preventDefault();

        // call backend api to get donation hash
        getTransactionReference();

        if ( donationRef == "" ) {
            // TODO: Figure out a way to display error messages
            return;
        }

        // populate subaccounts with ratio
        const subaccounts = packageRecipientSubAccounts();

        // generate configuration values for rave
        let flw_config = {
            PBFPubKey: flw_publickey,
            customer_email: donorEmail,
            amount: donationAmount,
            currency: "NGN",
            txref: donationRef,
            subaccounts: subaccounts,
            production: false, // TOOD: use env seperate PR
        }
        setRaveConfig(flw_config);
    }

    function validateDonation(){
        alert("Validating donation");
        // TODO: Call backend api
        let donation_status = "success";

        if (donation_status ==- "success") {
            alert("Thank you for donating"); // TODO: Switch to a proper modal

            // TODO: remove payment button
        }
    }

    /**
     * Populates recipients sub account using format specified here:
     * 
     */
    function packageRecipientSubAccounts() {
        let result = [];

        recipients.forEach(recipient => {
            result.push({
                'id': recipient.subAccount,
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
        // TODO: move to env
        const donationApiUrl = "http://localhost:5000/api/v1/donations";

        const beneficiaryIds = getBeneficiaryIds(); 

        const body = {
            "donor": donorEmail,
            "amount": donationAmount,
            "beneficiary_ids": beneficiaryIds,
            "source": "FLUTTERWAVE"
        }

        axios.post( donationApiUrl, body )
            .then( res => {
                if( res.status == 200 && res.data ) {
                    // get the reference
                    let reference = res.data.reference
                    setDonationRef( reference );
                }
            });
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

            {!raveConfig ? null
            : <Payment config={raveConfig} triggerValidation={validateDonation}></Payment> 
            }

        </div>
    )
}

export default Donation