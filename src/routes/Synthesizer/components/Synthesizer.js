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
        onChange={props.setWaveform}
        value={props.waveform}
      >
        {
          props.waveforms.map(waveform =>
            <option
              value={waveform.id}
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
        type='text'
        value={props.frequency}
        onChange={props.setFrequency}
      />
    </div>

    <div className='control'>
      <label htmlFor='duration'>Duration (milliseconds)</label>
      <input
        id='duration'
        type='text'
        value={props.duration}
        onChange={props.setDuration}
      />
    </div>

    <button>Play!</button>
  </div>
)

Synthesizer.propTypes = {
  waveforms: React.PropTypes.arrayOf(
    React.PropTypes.object
  ),
  waveform: React.PropTypes.number,
  frequency: React.PropTypes.number,
  duration: React.PropTypes.number,
  setWaveform: React.PropTypes.func,
  setFrequency: React.PropTypes.func,
  setDuration: React.PropTypes.func
}

export default Synthesizer
