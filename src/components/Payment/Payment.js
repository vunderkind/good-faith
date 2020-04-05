import React from 'react'
import TextCenter from '../utilities/TextCenter/TextCenter.js'
import { useRavePayment } from 'react-ravepayment'

const Payment = ({ config, triggerValidation}) => {

    const { initializePayment } = useRavePayment(config);

    return(
        <TextCenter>
            <button onClick={() => {
                initializePayment(triggerValidation, triggerValidation)
            }}>Pay with Flutterwave</button>
        </TextCenter>
    )

}

export default Payment;