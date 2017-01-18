import React from 'react'
import '../assets/Synthesizer.scss'

export const Synthesizer = (props) => (
  <div>
    <h2>Synthesizer</h2>
    <p>Play with dropdowns and hit 'play' to create a tone.</p>

    <div className='control'>
      <label htmlFor='waveform'>
        Waveform
      </label>
      <select
        id='waveform'
        onChange={props.changeWaveform}
        value={props.waveform}
      >
        {
          props.waveforms.map(waveform =>
            <option
              key={waveform.id}
              value={waveform.type}
            >
              {waveform.type}
            </option>
          )
        }
      </select>
    </div>

    <div className='control'>
      <label htmlFor='frequency'>Frequency</label>
      <input
        id='frequency'
        type='number'
        pattern='[0-9]*'
        value={props.frequency}
        onChange={props.changeFrequency}
      />
    </div>

    <div className='control'>
      <label htmlFor='duration'>Duration (milliseconds)</label>
      <input
        id='duration'
        type='number'
        pattern='[0-9]*'
        value={props.duration}
        onChange={props.changeDuration}
      />
    </div>

    <button onClick={props.playSound}>Play!</button>
  </div>
)

Synthesizer.propTypes = {
  waveforms: React.PropTypes.arrayOf(
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
