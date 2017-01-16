import React from 'react'
import '../assets/Synthesizer.scss'

export const Synthesizer = (props) => (
  <div>
    <h2>Synthesizer</h2>
    <p>Play with dropdowns and hit 'play' to create a tone.</p>

    <div className='control'>
      <label>Waveform</label>
      <select id='waveform'>
        <option>sine</option>
        <option>sawtooth</option>
        <option>triangle</option>
        <option>square</option>
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

Synthesizer.propTypes = {}

export default Synthesizer
