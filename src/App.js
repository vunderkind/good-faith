import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NeedHelp from './NeedHelp'
import SocialShare from './SocialShare';
import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <div className="Linq">
          <Link className="Link" id="home" to='/'>Home</Link>
          <Link className="Link" to='/about'>About</Link>
          <Link className="Link" to='/needhelp'>Need help</Link>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3>Share this with someone who needs it.</h3>
          <SocialShare
            text={"Share kindness in these COVID-19 times. If you're financially stable during this COVID-19 crisis, consider making a small contribution to people who haven't been as lucky. Use this to get a randomly-generated list of ten people who need your help."}
            url={window.location.href}
            tag={"AngelsAmongUs"}
          />
        </div>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/needhelp">
            <NeedHelp />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;