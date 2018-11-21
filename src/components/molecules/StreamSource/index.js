// eslint-disable-next-line
import React, {useState} from "react"

import {initAudio} from "/utils"

export default ({children}) => {
  const [volume, setVolume] = useState(0)
  const [audioStreams, setAudioStreams] = useState(null)

  const init = () => (
    !volume &&
    initAudio(setVolume)
      .then(streams => setAudioStreams(streams))
  )

  const terminate = () => (
    audioStreams && audioStreams.map(stream => stream.stop()) && setAudioStreams(null)
  )

  return children({
    init,
    volume,
    terminate,
  })
}