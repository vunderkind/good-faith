import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'

const App = () => {
    return (
        <>
        <Router>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/users">Users</Link>
        </Router>

        <Switch>
        <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        </>
    )
}

export default App;