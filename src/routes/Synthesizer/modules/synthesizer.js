import WAVEFORMS_MOCK_DATA from '../../../../mockData/WAVEFORMS.json'

// ------------------------------------
// Constants
// ------------------------------------
export const SYNTHESIZER_REQUEST_WAVEFORMS = 'SYNTHESIZER_REQUEST_WAVEFORMS'
export const SYNTHESIZER_RECEIVE_WAVEFORMS = 'SYNTHESIZER_RECEIVE_WAVEFORMS'
export const SYNTHESIZER_CHANGE_WAVEFORM = 'SYNTHESIZER_CHANGE_WAVEFORM'
export const SYNTHESIZER_CHANGE_FREQUENCY = 'SYNTHESIZER_CHANGE_FREQUENCY'
export const SYNTHESIZER_CHANGE_DURATION = 'SYNTHESIZER_CHANGE_DURATION'

// ------------------------------------
// Actions
// ------------------------------------
export function requestWaveforms () {
  return {
    type: SYNTHESIZER_REQUEST_WAVEFORMS
  }
}

export function receiveWaveforms (waveforms) {
  return {
    type: SYNTHESIZER_RECEIVE_WAVEFORMS,
    payload: waveforms
  }
}

export function changeWaveform (e) {
  return {
    type: SYNTHESIZER_CHANGE_WAVEFORM,
    payload: +e.target.value
  }
}

export function changeFrequency (e) {
  return {
    type: SYNTHESIZER_CHANGE_FREQUENCY,
    payload: +e.target.value
  }
}

export function changeDuration (e) {
  return {
    type: SYNTHESIZER_CHANGE_DURATION,
    payload: +e.target.value
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

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SYNTHESIZER_REQUEST_WAVEFORMS]: (state) => {
    return ({
      ...state,
      fetching: true
    })
  },
  [SYNTHESIZER_RECEIVE_WAVEFORMS]: (state, action) => {
    return ({
      ...state,
      waveforms: action.payload
    })
  },
  [SYNTHESIZER_CHANGE_WAVEFORM]: (state, action) => {
    return ({
      ...state,
      waveform: action.payload
    })
  },
  [SYNTHESIZER_CHANGE_FREQUENCY]: (state, action) => {
    return ({
      ...state,
      frequency: action.payload
    })
  },
  [SYNTHESIZER_CHANGE_DURATION]: (state, action) => {
    return ({
      ...state,
      duration: action.payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  waveforms: [],
  waveform: 1,
  frequency: 250,
  duration: 500
}

export default function synthesizerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
