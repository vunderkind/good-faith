import React, {useState} from 'react';
import './App.css';
import kindness from './kindness.png';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Home() {
  const [state, setState] = useState({copied: false})
  const [visible, setvisible] = useState(true)
  const [users, setusers] = useState(null);
  const apiURL = 'https://cors-anywhere.herokuapp.com/https://good-faith.herokuapp.com/api/people'
  function fetchusers() {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => setusers(data))
    setvisible(!visible)
  }
  
  if(visible) {
    return (
      <div className="App">
        <img className="App-logo " src={kindness} alt="kindness"/>
        <h1>Angels among us.</h1>
        <h2>'Angels among us' is a simple tool for people with relatively secure financial statuses to help people whose means of livelihood have been affected by the COVID-19 outbreak.<br/><br/> When you click the 'Be an angel' button, we'll send you a random list of ten people you can contribute to. We suggest that you send money to each of the ten (eg. N2,000-N10,000 to each person)</h2>
        <button className="Button" onClick={fetchusers}>Be an angel</button>
        <button className="Button Button2">I need help</button>
      </div>
    );
  }
  return (
    <div>
    <div className="header">
      <div className="Title">
    <h1 style={{fontSize: '25px', color: 'green'}}>Angels among us.</h1>
    </div>
    <h2>A list of people who have been economically affected by the COVID-19 virus and are currently without pay.</h2>
      <h2 style={{color:'gray', fontStyle:'italic'}}>Here are ten randomly-generated individuals who you can help</h2>
    </div>
    <div>
    {users && users.map ((user) => (
      <div index={user.id} className="userCard">
      <h2 style={{fontSize:'15px'}}><span>{user.firstName} {user.lastName}</span> ({user.location})</h2>
      <hr/>
      <h3>"{user.context}"</h3>
      <CopyToClipboard text={user.paymentLink}
          onCopy={() => setState({copied: true})}>
          <button>Tap to copy account details</button>
        </CopyToClipboard>
        {state.copied ? <span style={{color: 'blue', fontSize: '12px'}}>Copied!</span> : null}
        <br/>
      </div>
    ))}
    </div>
    </div>
  )
 
}

export default Home;
