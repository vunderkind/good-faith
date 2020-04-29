import React from 'react'
import TextCenter from './utilities/TextCenter/TextCenter'

const FAQ = () => {
    return (
        <div className="App">
            <h1>FAQ</h1>
            <h2>Why does “Angels Among Us” exist?</h2>
            <p>Even during a global pandemic like COVID-19, the impact on humanity is far from uniform. Consider this: if you’re earning a salary during the lockdown, your biggest worry is staying indoors and staying uninfected. For many other people, it’s a different juggling act. Many people earn from daily work, especially in the informal economy, and the lockdown is effectively a death sentence. They have to think about not getting infected while fighting off hunger pangs and drowning in the pain of not being able to fend for a family that is dependent on them.</p>
            <p>‘Angels Among Us’ is a tool that gives you the ability to do something about it. If you’re on a salary or on a relatively comfortable financial level this period, consider distributing a small percentage of your income (ideally on a monthly or weekly basis) to people who are in need of support.</p>
            <p>Angels Among Us does not take a commission on the money you send. As a matter of fact, your money does not even go through Angels Among Us. The role of the tool is simple: to match public-spirited visitors (like you) with people seeking help, and the tool does it in a programmatically non-deterministic way (that is, Angels Among Us randomly sends you three names of people to help. That way, everyone has a fair chance to be helped, not influenced by the website at all!)</p>
            <br />
            <h2 id="verify">How do you verify the identities of the people who need help?</h2>
            <p>People who need help fill a form on angelsamong.us/needhelp, and they get added to a waitlist. A network of volunteers (‘Archangels’) screen people in the waitlist before we add them to the Angels Among Us database.</p>
            <p>Our screening process is two-fold: first, everyone who needs help sends us a photo according to specific instructions: they write their name and account number on a piece of paper and hold it up to the camera. This is to ensure that we have them identified. We do not share these photos - we respect the privacy of everyone asking for help.</p>
            <p>When the photo is reviewed and approved, an Archangel calls them to get more details. This is the stage where we ask about their financial situation and how the COVID-19 crisis has affected them. Afterwards, we verify that their account information matches the name and surname provided in the form.</p>

            <p>Recently we’ve started asking for Bank Verification Numbers (BVNs).</p>

            <p>That is our verification process. We also collect their email addresses and phone numbers, although we do not publicly share them.</p>

            <p>With that said, however, we’re not perfect: sometimes despite our best efforts, one or two non-rigorously vetted people slip through the cracks. If you find any of such people, click the ‘Report problem with details’ hypertext to send an email!</p>


            <h2>Who made this?</h2>
            <p>Justin Irabor. He is now supported by a brilliant volunteer network of <a href="/team">software engineers and community managers</a>.</p>

            <h2>What’s new on Angels Among Us?</h2>
            <p>A lot! We have revamped our donation experience to optionally allow users donate to multiple people at once! We'll keep working to improve the experience with regular updates.</p>

            <h2>How do you know when a person has been ‘sufficiently’ helped?</h2>
            <p>With the introduction of our new donation experience and <i>'I donated!'</i> option, we're able to automatically tell how much help each person has recieved. With this, we can update the people on the list to increase the chances of new entrants to be helped.</p>

            <h2>Wait - I have more questions!</h2>

            <p><a href="mailto:angelsamongusbot@gmail.com">Email Us.</a></p>

            <TextCenter>
                <p><a href="/">^Back home</a></p>
            </TextCenter>

        </div>
    )
}

export default FAQ