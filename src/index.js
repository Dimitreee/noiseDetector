import React from "react"
import {render} from "react-dom"

import Pages from "/pages"

import * as serviceWorker from "./serviceWorker"

render(<Pages />, document.getElementById('root'));

serviceWorker.unregister();