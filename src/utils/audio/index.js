import {
  getRMS,
  handleError,
  createSource,
  settingAnalyzer,
} from "./misc"

const init = handler => {
  const audioContext = new AudioContext()

  try {
    navigator.getUserMedia(
      {audio: true},
      processSound(audioContext, handler),
      handleError
    )
  } catch (e) {
    handleError(e)
  }
}

const handleAudioProcess = (analyser, handler) => () => {
  const spectrum = new Uint8Array(analyser.frequencyBinCount)

  analyser.getByteFrequencyData(spectrum)
  handler && handler(getRMS(spectrum))
}

const processSound = (audioContext, handler) => stream => {
  const [analyser, node] = createSource(audioContext)

  settingAnalyzer(analyser)

  node.onaudioprocess = () => handleAudioProcess(analyser, handler)()
  audioContext.createMediaStreamSource(stream).connect(analyser)
  analyser.connect(node)
  node.connect(audioContext.destination)
}

init()