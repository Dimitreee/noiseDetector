import React from "react"
import {DB} from "/utils"

DB.set({test: 123})
DB.get()

export default props => {

  return (
    <span>home</span>
  )
}
