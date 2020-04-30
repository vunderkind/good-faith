import React from 'react'
import TextCenter from '../utilities/TextCenter/TextCenter.js'
import { useRavePayment } from 'react-ravepayment'
import './Payment.css';

const Payment = ({ config, triggerValidation, afterClose}) => {

    const { initializePayment } = useRavePayment(config);

    return(
        <TextCenter>
            <button className="btn btn-primary flw-accent" onClick={() => {
                initializePayment(triggerValidation, afterClose)
            }}>Give with Flutterwave</button>
        </TextCenter>
    )

}

export default Payment;