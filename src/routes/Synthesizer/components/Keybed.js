import React from 'react'

const Keybed = (props) => (
  <button onClick={props.playSound}>Play!</button>
)

Keybed.propTypes = {
  playSound: React.PropTypes.func
}

export default Keybed
