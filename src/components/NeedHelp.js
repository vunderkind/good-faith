import React from 'react'
import Button from './utilities/Button/Button'

const NeedHelp = () => {
    return (
        <div className="App" id="hp">
            <h1>Get added to the database</h1>
            <h2>Please fill this form to have your name added to the list of people who need help.</h2>
            <h2>It may take a little while for me to add your name to the list, as I'll first have to call you and verify your identity. Thank you for your patience!</h2>
            <Button type="secondary" externalLink="https://docs.google.com/forms/d/e/1FAIpQLSdpllHsWu7itPs3gVNRkEW4qMIwwzss83_0hKgHU_9mGrtz6g/viewform">Go To Form</Button>
            <br /><br />
            <hr />
            <h2>Notes</h2>
            <ul>
                <li>When you're helped, consider paying it forward: share with someone in your neighborhood who could use the help, or come back to angelsamong.us and give back to a random set of people.</li><br />
                <li>If you've been sufficiently helped, send an email to thevunderkind@gmail.com so we can remove your name from the database. This is so other people can be helped as well!</li>
            </ul>
        </div>
    )
}

export default NeedHelp