window.audioContext = window.audioContext || new AudioContext()

module.exports = makeSound

function makeSound (waveform, frequency, duration) {
  let oscillator = audioContext.createOscillator()
  oscillator.type = waveform || 'sine'
  oscillator.frequency.value = frequency || 300

  oscillator.connect(audioContext.destination)

  oscillator.start()
  duration = duration || 500
  window.setTimeout(oscillator.stop.bind(oscillator), duration)
}
