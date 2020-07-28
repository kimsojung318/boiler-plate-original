import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import LandingPage from "./components/Views/LandingPage/LandingPage"
import LoginPage from "./components/Views/LoginPage/LoginPage"
import RegisterPage from "./components/Views/RegisterPage/RegisterPage"

function App() {
  return (
    <Router>
      <div>

        <hr />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
