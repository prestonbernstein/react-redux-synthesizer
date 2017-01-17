import WAVEFORMS_MOCK_DATA from '../../../../mockData/WAVEFORMS.json'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_WAVEFORMS = 'REQUEST_WAVEFORMS'
export const RECEIVE_WAVEFORMS = 'RECEIVE_WAVEFORMS'
export const REQUEST_WAVEFORM = 'REQUEST_WAVEFORM'
export const RECEIVE_WAVEFORM = 'RECEIVE_WAVEFORM'

// ------------------------------------
// Actions
// ------------------------------------
export function requestWaveforms () {
  return {
    type: REQUEST_WAVEFORMS
  }
}

export function receiveWaveforms (waveforms) {
  return {
    type: RECEIVE_WAVEFORMS,
    payload: waveforms
  }
}

export function requestWaveform () {
  return {
    type: REQUEST_WAVEFORM
  }
}

export function receiveWaveform (value) {
  return {
    type: RECEIVE_WAVEFORM,
    payload: {
      id: value.id,
      userTerm: value.userTerm
    }
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const fetchWaveforms = () => {
  return (dispatch) => {
    dispatch(requestWaveforms())

    return dispatch(receiveWaveforms(WAVEFORMS_MOCK_DATA.waveforms))
  }
}

export const fetchWaveform = () => {
  return (dispatch) => {
    dispatch(requestWaveform())

    return fetch('https://api.github.com/zen')
      .then(data => data.text())
      .then(text => dispatch(receiveWaveform(text)))
  }
}

export const actions = {
  requestWaveforms,
  receiveWaveforms,
  fetchWaveforms,
  requestWaveform,
  receiveWaveform,
  fetchWaveform
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_WAVEFORMS]: (state) => {
    return ({
      ...state,
      fetching: true
    })
  },
  [RECEIVE_WAVEFORMS]: (state, action) => {
    return ({
      ...state,
      waveforms: action.payload
    })
  },
  [REQUEST_WAVEFORM]: (state) => {
    return ({
      ...state,
      fetching: true
    })
  },
  [RECEIVE_WAVEFORM]: (state, action) => {
    return ({
      ...state,
      current: action.payload.id,
      fetching: false
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  waveforms: [],
  current: null
}

export default function synthesizerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
