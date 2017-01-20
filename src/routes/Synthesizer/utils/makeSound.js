const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()

module.exports = makeSound

function makeSound (waveform, frequency, duration) {
  let oscillator = audioCtx.createOscillator()
  oscillator.type = waveform || 'sine'
  oscillator.frequency.value = frequency || 300

  oscillator.connect(audioCtx.destination)

  oscillator.start()
  duration = duration || 500
  window.setTimeout(oscillator.stop.bind(oscillator), duration)
}
