import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NeedHelp from './components/NeedHelp'
import SocialShare from './components/SocialShare';
import Team from './components/Team'
import './App.css'
import Footer from './components/Footer'
import FAQ from './components/FAQ'

const App = () => {
  return (
      <Router>
          <div className="Linq">
            <Link className="Link" id="home" to='/'>Home</Link>
            <Link className="Link" to='/about'>About</Link>
            <Link className="Link" to='/faq'>FAQ</Link>
            <Link className="Link" to='/needhelp'>Need help</Link>
            <Link className="Link" to='/team'>Team</Link>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3>Share 'Angels among us' with your network!</h3>
            <SocialShare
              text={"Share kindness in these COVID-19 times. If you're financially stable during this COVID-19 crisis, consider making a small contribution to people who haven't been as lucky. Use this to get a randomly-generated list of three people who need your help."}
              url={window.location.href}
              tag={"#AngelsAmongUs"}
            />
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
              <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/needhelp">
              <NeedHelp />
            </Route>
            <Route path='/team'>
              <Team />
              </Route>
          </Switch>

          <Footer />
      </Router>
  )
}

export default App;