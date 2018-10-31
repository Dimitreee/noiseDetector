import {
  FFT_SIZE,
  MAX_DECIBELS,
  MIN_DECIBELS,
  SMOOTHING_TIME_CONSTANT
} from "/constants"

export const getRMS = spectrum => {
  let rms = 0
  for (let i = 0; i < spectrum.length; i++) {
    rms += spectrum[i] * spectrum[i]
  }

  rms /= spectrum.length

  return Math.sqrt(rms)
}

export const handleError = e => {
  console.log(e)
}

export const adjustFreqData = (frequencyData, ammt) => {
  frequencyData.slice(0, frequencyData.length / 2)

  const new_length = ammt || 16
  let newFreqs = []
  let prevRangeStart = 0
  let prevItemCount = 0

  for (let j = 1; j <= new_length; j++) {
    let pow
    let itemCount
    let rangeStart

    if (j%2 === 1) {
      pow = (j-1)/2
    } else {
      pow = j/2
    }

    itemCount = Math.pow(2, pow);

    if (prevItemCount === 1) {
      rangeStart = 0
    } else {
      rangeStart = prevRangeStart + (prevItemCount / 2)
    }

    let newValue = 0
    let total = 0

    for (let k = rangeStart; k < rangeStart + itemCount; k++) {
      total += frequencyData[k]
      newValue = total/itemCount
    }

    newFreqs.push(newValue)
    prevItemCount = itemCount
    prevRangeStart = rangeStart
  }
  return newFreqs
}

export const settingAnalyzer = analyser => {
  analyser.smoothingTimeConstant = SMOOTHING_TIME_CONSTANT
  analyser.fftSize = FFT_SIZE
  analyser.minDecibels = MIN_DECIBELS
  analyser.maxDecibels = MAX_DECIBELS
}

export const createSource = audioContext => [
  audioContext.createAnalyser(),
  audioContext.createScriptProcessor(FFT_SIZE * 2, 1, 1)
]