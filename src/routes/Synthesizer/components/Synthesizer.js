import React from 'react'
import Controls from './Controls'
import Keybed from './Keybed'

import '../assets/Synthesizer.scss'

export const Synthesizer = (props) => (
  <div id='Synthesizer'>
    <h2>Synthesizer</h2>
    <p>Play with dropdowns and hit 'play' to create a tone.</p>

    <Controls
      waveforms={props.waveforms}
      waveform={props.waveform}
      duration={props.duration}
      frequency={props.frequency}
      changeWaveform={props.changeWaveform}
      changeDuration={props.changeDuration}
      changeFrequency={props.changeFrequency}
    />

    <Keybed
      interval={props.interval}
      playSound={props.playSound}
    />
  </div>
)

Synthesizer.propTypes = {
  waveforms: React.PropTypes.arrayOf(
    React.PropTypes.object
  ),
  interval: React.PropTypes.arrayOf(
    React.PropTypes.object
  ),
  waveform: React.PropTypes.string,
  frequency: React.PropTypes.number,
  duration: React.PropTypes.number,
  changeWaveform: React.PropTypes.func,
  changeFrequency: React.PropTypes.func,
  changeDuration: React.PropTypes.func,
  playSound: React.PropTypes.func
}

export default Synthesizer
