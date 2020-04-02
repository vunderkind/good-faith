import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NeedHelp from './components/NeedHelp'
import Team from './components/Team'
import './App.css'
import Footer from './Footer/Footer'
import FAQ from './components/FAQ'
import Header from './components/Header'

const App = () => {
  return (
    <Router>

      <Header />

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