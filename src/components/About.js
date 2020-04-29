import React from 'react'
import TextCenter from './utilities/TextCenter/TextCenter'

const About = () => {
    return(
        <div className="App">
            <h1>What is this website?</h1>
            <p>'Angels among us' is a simple tool (heavily inspired by <a href="https://leveler.info">Leveler)</a> for people looking for ways to share some of their income with people who are in dire economic straits because of the COVID-19 pandemic.</p>
            <p>It is a simple database of people who need help, randomly delivered to you <span>three</span> at a time. You can either donate to all of them at once, or manually copy their account details and make a contribution to their well-being.</p>
            <p>You are helping these distressed people directly, we're merely providing a platform connecting you them. We make no profit from this, and we do not collect commissions. We earn nothing from this.</p>
            <br/>
            <h1>How do I help?</h1>
            <p>On the <a href="https://angelsamong.us">homepage</a>, click the 'Be an angel' button to see a randomly-generated list of three people who need help from you. You can either donate via the platform or manually sending to their account details. If you're donating to each person manually, please send the same amount of money to all of them. This is a great way to ensure that as many people as possible are uniformly reached by kind people like you.</p>
            <br/>
            <h1>I need help</h1>
            <p>Click the 'I need help' button on the homepage and let people know just what you need</p>
            <p>This is a good faith project: it works because honest people want to help honest people in need.</p>
            <p>If your financial needs have been met, send us an email <a href="mailto:thevunderkind@gmail.com">here</a> so we can take out your name. This is important so other people in need are likelier to be helped.</p>
            <br/>
            <h1>Other forms of support</h1>
            <p>If you're a dev looking to add features to make this project better, shoot us an email <a href="mailto:thevunderkind@gmail.com">here</a>. If you want to lend your support as a comms expert to handle social media and/other ways of reaching out to people who need help and donors alike, also send us an email!</p>
            <br/>
            <TextCenter>
                <p><a href="https://angelsamong.us">^Back home</a></p>
            </TextCenter>
        </div>
    )
}

export default About