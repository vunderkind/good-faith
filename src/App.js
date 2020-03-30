import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import './App.css'

const App = () => {
    return (
        <>
        <Router>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/users">Users</Link>

        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        </Router>
        </>
    )
}

export default App;