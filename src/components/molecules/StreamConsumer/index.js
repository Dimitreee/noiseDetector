import React from "react"

import {useSource} from "/hooks"

import {
  Button,
  StatsContainer,
} from "./styles"

export default ({volume, init, terminate}) => {
  const [
    sourceState,
    initSource,
    terminateSource
  ] = useSource(init, terminate)

  return (
    <>
      <StatsContainer>
        {volume}
        <span>{sourceState}</span>
      </StatsContainer>
      <Button onClick={initSource}>
        init
      </Button>
      <Button onClick={terminateSource}>
        terminate
      </Button>
    </>
  )
}