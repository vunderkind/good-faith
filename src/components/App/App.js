import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import NeedHelp from '../NeedHelp'
import './App.css'
import Footer from '../Footer/Footer'
import FAQ from '../FAQ'
import Header from '../Header/Header'
import Team from '../Team/Team'

const App = () => {
  return (
    <Router>

      <Header />

      <main>
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
      </main>

      <Footer />
    </Router>
  )
}

export default App;