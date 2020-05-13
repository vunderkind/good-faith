import React, { useState, Fragment } from 'react';
import Loader from 'react-loader-spinner'
import UserCard from './UserCard/UserCard';
import Button from './utilities/Button/Button';
import TextCenter from './utilities/TextCenter/TextCenter';
import Donation from './Donation/Donation';

function Home() {
  const [visible, setvisible] = useState(true)
  const [users, setusers] = useState(null);
  const apiURL = `${process.env.REACT_APP_ANGELSAPIBASE}/randomize-people`

  function fetchusers() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setusers(data))
    setvisible(!visible) //using this to manage the state of the results page
  }

  return (
    <div className="App">

      {
        visible ?
          <Fragment>
            <TextCenter>
              <p>
                'Angels among us' is a simple tool for people with relatively secure financial statuses to help people whose means of livelihood have been affected by the COVID-19 outbreak.
              </p>
              <Button type="primary" onClick={fetchusers}>Be an angel</Button>
              &nbsp;
              <Button type="secondary" link="needhelp">I need help</Button>
              <p>
                When you click the 'Be an angel' button, you'll get a random list of <span>three</span> people you can contribute to.
              </p>
              <p>
                You can donate directly to people via the platform or manually by sending money to their listed account details.
              </p>
              <p>
                If you chose to donate manually, consider sending money to each person on the list (eg. N2,000 to three people is N6,000). This is a great way to ensure we reach as many people as possible, as uniformly as possible.
              </p>
              <p><a href="/faq#verify">See how we verify identities of people in need</a></p>
            </TextCenter>
          </Fragment>
          :
          <Fragment>
            <TextCenter>
              <p>A list of people who have been economically affected by the COVID-19 virus and are currently without pay.</p>
              <p className="accent-text">Here are <span>three</span> randomly-selected individuals who you can help.<br /> If you'd like to donate to more people after your first three, refresh the page.</p>
            </TextCenter>

            {users ?
              <div>
                <hr></hr>
                <Donation recipients={users}/>
              </div>
              : null
            }

            <div>
              {!users ? <Loader className="Loader"
                type="BallTriangle"
                color="#FF4444"
                height={40}
                width={40}
              /> : null}
              {users && users.map((user) => (
                <UserCard
                  key={user._id}
                  user={user}
                />
              ))}
            </div>
          </Fragment>
      }
    </div>
  )

}

export default Home;
