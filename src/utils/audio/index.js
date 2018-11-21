import {
  createSource,
  handleAudioProcess,
} from "./misc"

const terminateAudio = stream => () => {
  if (!stream) return

  stream.getAudioTracks()
    .forEach(track => track.stop())
}

const init = handler => {
  return new Promise((res, rej) => {
    const audioContext = new AudioContext()

    try {
      navigator.getUserMedia(
        { audio: true },
        stream => (res(processSound(audioContext, handler, stream))),
        error => rej(error),
      )
    } catch (error) {
      rej(error)
    }
  })
}

const processSound = (audioContext, handler, stream) => {
  const [analyser, node] = createSource(audioContext)

  node.onaudioprocess = () => handleAudioProcess(analyser, handler)()

  audioContext
    .createMediaStreamSource(stream)
    .connect(analyser)

  analyser
    .connect(node)

  node
    .connect(audioContext.destination)

  return stream.getAudioTracks()
}

const initAudio = init

export {
  initAudio,
  terminateAudio
}