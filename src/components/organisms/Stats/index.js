import React from "react"

import {
  StreamSource,
  StreamConsumer
} from "/components"

export default props => {
  return (
    <StreamSource>
      {renderProps => <StreamConsumer {...renderProps} {...props}/>}
    </StreamSource>
  )
}

