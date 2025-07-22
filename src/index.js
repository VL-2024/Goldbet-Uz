import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Page1 from './views/page1'
import Home from './views/home'
import Page2 from './views/page2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <Switch>
        <Route component={Page} exact path="/page" />
        <Route component={Page1} exact path="/1" />
        <Route component={Home} exact path="/" />
        <Route component={Page2} exact path="/page2" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
