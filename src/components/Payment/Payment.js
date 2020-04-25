import React from 'react'
import TextCenter from '../utilities/TextCenter/TextCenter.js'
import { useRavePayment } from 'react-ravepayment'
import './Payment.css';

const Payment = ({ config, triggerValidation}) => {

    const { initializePayment } = useRavePayment(config);

    return(
        <TextCenter>
            <button className="btn btn-primary flw-accent" onClick={() => {
                initializePayment(triggerValidation, triggerValidation)
            }}>Pay with Flutterwave</button>
        </TextCenter>
    )

}

export default Payment;