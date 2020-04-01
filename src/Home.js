import React, { useState } from 'react';
import Loader from 'react-loader-spinner'
import './App.css';
// import NeedHelp from './NeedHelp'
import { Link } from 'react-router-dom'
import UserCard from './UserCard';

function Home() {
  const [visible, setvisible] = useState(true)
  const [users, setusers] = useState(null);
  const apiURL = 'https://cors-anywhere.herokuapp.com/https://good-faith.herokuapp.com/api/people'
  function fetchusers() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => makeRandom(data))
      .then(final => setusers(final))
    setvisible(!visible) //using this to manage the state of the results page
  }

  function makeRandom(info) {
    var arr = [];
    let emptyArray = []
    while (arr.length < 10) {
      var r = Math.floor(Math.random() * info.length);
      if (arr.indexOf(r) === -1) {
        arr.push(r);
        emptyArray.push(info[r])

      }
    }
    return emptyArray

  }


  return (
    visible ?
      <div className="App">
        {/* <img className="App-logo " src={kindness} alt="kindness"/> */}
        <h1>Angels among us.</h1>
        <h2>'Angels among us' is a simple tool for people with relatively secure financial statuses to help people whose means of livelihood have been affected by the COVID-19 outbreak.<br /><br /> When you click the 'Be an angel' button, you'll get a random list of ten people you can contribute to. Consider sending money to each person on the list (eg. N2,000-N10,000 to each person). This is a great way to ensure we reach as many people as possible, as uniformly as possible.</h2>
        <button className="Button" onClick={fetchusers}>Be an angel</button>
        <Link to="/needhelp"><button className="Button Button2">I need help</button></Link>
      </div>
    :
      <div>
        <div className="header">
          <div className="Title">
            <h1 style={{ fontSize: '25px', color: 'green' }}>Angels among us.</h1>
          </div>
          <h2>A list of people who have been economically affected by the COVID-19 virus and are currently without pay.</h2>
          <h2 style={{ color: 'gray', fontStyle: 'italic' }}>Here are ten randomly-generated individuals who you can help</h2>
        </div>
        <div>
          {!users ? <Loader className="Loader"
            type="BallTriangle"
            color="#008000"
            height={40}
            width={40}
          /> : null}
          {users && users.map((user) => (
            <UserCard 
              key={user.id} 
              user={user} 
            />
          ))}
        </div>
      </div>
  )

}

export default Home;
