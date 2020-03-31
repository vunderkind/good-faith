import React, {useState} from 'react';
import Loader from 'react-loader-spinner'
import './App.css';
import kindness from './kindness.png'
import NeedHelp from './NeedHelp'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'

function Home() {
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

  if(visible) {
    return (
      <div className="App">
      <Router>
        <img className="App-logo " src={kindness} alt="kindness"/>
        <h1>Angels among us.</h1>
        <h2>'Angels among us' is a simple tool for people with relatively secure financial statuses to help people whose means of livelihood have been affected by the COVID-19 outbreak.<br/><br/> When you click the 'Be an angel' button, we'll send you a random list of ten people you can contribute to. We suggest that you send money to each of the ten (eg. N2,000-N10,000 to each person)</h2>
        <button className="Button" onClick={fetchusers}>Be an angel</button>
        <NavLink to="/needhelp"><button className="Button Button2">I need help</button></NavLink>

      <Switch>
        <Route path="/needhelp">
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
        <summary><span>Tap for account info</span></summary>
        {user.accountName} <br/> <strong>{user.accountNumber}</strong> <br/> {user.bankName}
      </details>
      </div>
    ))}
    </div>
    </div>
  )
 
}

export default Home;
