export class MicrophoneController {
  constructor() {
    this.FFT_SIZE = 2048;
    this.data = [];
    this.volume = this.vol = 0;
    this.peak_volume = 0;
    this.audioContext = new AudioContext();
    this.SAMPLE_RATE = this.audioContext.sampleRate;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

    window.addEventListener('load', () => this.init() , false);
  }

  init () {
    try {
      this.startMic(this.audioContext);
    } catch (e) {
      console.error(e);
    }
  };

  startMic () {
    navigator.getUserMedia({ audio: true }, (s) => this.processSound(s), MicrophoneController.errorHandler);
  }

  processSound(stream) {
    const analyser = this.audioContext.createAnalyser();
    analyser.smoothingTimeConstant = 0.2;
    analyser.fftSize = this.FFT_SIZE;
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;

    const node = this.audioContext.createScriptProcessor(this.FFT_SIZE * 2, 1, 1);

    node.onaudioprocess = () => {
      this.spectrum = new Uint8Array(analyser.frequencyBinCount);

      analyser.getByteFrequencyData(this.spectrum);
      this.data = MicrophoneController.adjustFreqData(this.spectrum);

      this.vol = MicrophoneController.getRMS(this.spectrum);
      if (this.vol > this.peak_volume) {
        this.peak_volume = this.vol;
      }
      this.volume = this.vol;
    };

    const input = this.audioContext.createMediaStreamSource(stream);

    input.connect(analyser);
    analyser.connect(node);
    node.connect(this.audioContext.destination);
  };

  static errorHandler() {
    console.log(arguments);
  };

  static getRMS(spectrum) {
    let rms = 0;
    for (let i = 0; i < spectrum.length; i++) {
      rms += spectrum[i] * spectrum[i];
    }
    rms /= spectrum.length;
    rms = Math.sqrt(rms);
    return rms;
  };

  static adjustFreqData (frequencyData, ammt) {
    frequencyData.slice(0,frequencyData.length / 2);
    const new_length = ammt || 16;
    let newFreqs = [];
    let prevRangeStart = 0;
    let prevItemCount = 0;

    for (let j=1; j<=new_length; j++) {
      let pow;
      let itemCount;
      let rangeStart;

      if (j%2 === 1) {
        pow = (j-1)/2;
      } else {
        pow = j/2;
      }

      itemCount = Math.pow(2, pow);

      if (prevItemCount === 1) {
        rangeStart = 0;
      } else {
        rangeStart = prevRangeStart + (prevItemCount/2);
      }

      let newValue = 0;
      let total = 0;

      for (let k = rangeStart; k<rangeStart+itemCount; k++) {
        total += frequencyData[k];
        newValue = total/itemCount;
      }
      newFreqs.push(newValue);
      prevItemCount = itemCount;
      prevRangeStart = rangeStart;
    }
    return newFreqs;
  }
}