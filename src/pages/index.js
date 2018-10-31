import React from "react"
import {Router} from "@reach/router"

import Home from "./home"

export default props => (
  <Router>
    <Home path="/"/>
  </Router>
)