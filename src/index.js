import React from "react"
import * as serviceWorker from "./serviceWorker"
import ReactDOM from "react-dom"
import Pages from "/pages"

ReactDOM.render(
  <Pages />,
  document.getElementById('root')
)

serviceWorker.unregister();