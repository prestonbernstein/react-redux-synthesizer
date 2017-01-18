import React from 'react'
import '../assets/Synthesizer.scss'

export const Synthesizer = (props) => (
  <div>
    <h2>Synthesizer</h2>
    <p>Play with dropdowns and hit 'play' to create a tone.</p>

    <div className='control'>
      <label
        htmlFor='waveform'
      >
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
      <label>Frequency</label>
      <input />
    </div>

    <div className='control'>
      <label>Duration (milliseconds)</label>
      <input />
    </div>

    <button>Play!</button>
  </div>
)

Synthesizer.propTypes = {
  waveforms: React.PropTypes.arrayOf(
    React.PropTypes.object
  ),
  setWaveform: React.PropTypes.func,
  waveform: React.PropTypes.number
}

export default Synthesizer
