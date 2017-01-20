import React from 'react'

const Key = (props) => (
  <button
    className='key'
    onClick={() => props.playSound(props.frequency)}
  >
    {props.note}
  </button>
)

Key.propTypes = {
  note: React.PropTypes.string,
  frequency: React.PropTypes.number,
  playSound: React.PropTypes.func
}

const Keybed = (props) => (
  <div id='Keybed'>
    {
      props.interval.map(note =>
        <Key
          key={note.id}
          frequency={note.frequency}
          note={note.note}
          playSound={props.playSound}
        />
      )
    }
  </div>
)

Keybed.propTypes = {
  interval: React.PropTypes.arrayOf(
    React.PropTypes.object
  ),
  playSound: React.PropTypes.func
}

export default Keybed
