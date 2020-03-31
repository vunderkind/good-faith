import React, {useState} from 'react';
import Loader from 'react-loader-spinner'
import './App.css';
import NeedHelp from './NeedHelp'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import CopyToClipboard from 'react-copy-to-clipboard'

function Home() {
  const [state, setState] = useState({copied: false, message: 'Copy account number'})
  const [visible, setvisible] = useState(true)
  const [users, setusers] = useState(null);
  const apiURL = 'https://cors-anywhere.herokuapp.com/https://good-faith.herokuapp.com/api/people'
  function fetchusers() {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => makeRandom(data))
    .then(final =>setusers(final))
    setvisible(!visible) //using this to manage the state of the results page
  }

  function makeRandom(info) {
    var arr = [];
    let emptyArray = []
  while(arr.length < 10){
    var r = Math.floor(Math.random() * info.length);
    if(arr.indexOf(r) === -1) {
      arr.push(r);
      emptyArray.push(info[r])

    }
}
return emptyArray

  }

  function getAccountErrorEmailHref(user) {
    return "mailto:thevunderkind@gmail.com?subject=Problem with account on angelsamong.us&body=Hello, I had a problem transferring to " + user.accountNumber + ", " + user.bankName
  }

  if(visible) {
    return (
      <div className="App">
        {/* <img className="App-logo " src={kindness} alt="kindness"/> */}
        <h1>Angels among us.</h1>
        <h2>'Angels among us' is a simple tool for people with relatively secure financial statuses to help people whose means of livelihood have been affected by the COVID-19 outbreak.<br/><br/> When you click the 'Be an angel' button, you'll get a random list of ten people you can contribute to. Consider sending money to each person on the list (eg. N2,000-N10,000 to each person). This is a great way to ensure we reach as many people as possible, as uniformly as possible.</h2>
        <button className="Button" onClick={fetchusers}>Be an angel</button>
        <Router>
        <Link to="/needhelp"><button className="Button Button2">I need help</button></Link>

      <Switch>
        <Route path="/needhelp" id="hp">
          <NeedHelp />
        </Route>
      </Switch>
      </Router>
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
    {!users? <Loader className="Loader"
         type="BallTriangle"
         color="#008000"
         height={40}
         width={40}
      />: null}
    {users &&  users.map ((user) => (
      <div key={user.id} className="userCard">
      <h2 style={{fontSize:'15px'}}><span>{user.firstName} {user.lastName}</span> ({user.location})</h2>
      <hr/>
      <h3>"{user.context}"</h3>
      <details>
        <summary><span style={{fontSize:'17px'}}>Tap for account info</span></summary>
        <strong>{user.accountNumber}</strong> <br/> {user.bankName}
        <br/>
        <div className="interact">
        <CopyToClipboard text={user.accountNumber}
          onCopy={() => (setState({copied: true, message:'Copied!'}), setTimeout(()=>{setState({message: 'Copy account number'})},500))
          }
          >
          <button key ={user.id} id={user.id}className="Clipboard">{state.message}</button>
        </CopyToClipboard>
        &nbsp;
        <div className="Report">
        <a 
          href={ getAccountErrorEmailHref(user) }
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank" 
          rel="noopenner noreferrer"
        >
          Report problem with details
        </a>
        </div>
        </div>
      </details>
      </div>
    ))}
    </div>
    </div>
  )
 
}

export default Home;
