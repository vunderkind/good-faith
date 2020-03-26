import React from 'react';
import './App.css';
import kindness from './kindness.png';

function App() {
  return (
    <div className="App">
      <img className="App-logo " src={kindness} alt="kindness"/>
      <h1>Angels among us.</h1>
      <h2>'Angels among us' is a simple tool for people with relatively secure financial statuses to help people whose means of livelihood have been affected by the COVID-19 outbreak.<br/><br/> When you click the 'Be an angel' button, we'll send you a random list of ten people you can contribute to. We suggest that you send money to each of the ten (eg. N2,000-N10,000 to each person)</h2>
      <button className="Button">Be an angel</button>
      <button className="Button Button2">I need help</button>

    </div>
  );
}

export default App;
