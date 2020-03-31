import React from 'react'
import './App.css'

const NeedHelp = () => {
    return(
        <div className="App3" id="hp">
            <h1>Get added to the database</h1>
            <h2>Please fill this form to have your name added to the list of people who need help.</h2>
            <h2>It may take a little while for me to add your name to the list, as I'll first have to call you and verify your identity. Thank you for your patience!</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpllHsWu7itPs3gVNRkEW4qMIwwzss83_0hKgHU_9mGrtz6g/viewform"><button className="Button">Go to form</button></a>
        </div>
    )
}

export default NeedHelp