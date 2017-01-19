import WAVEFORMS_MOCK_DATA from '../../../../mockData/WAVEFORMS.json'
import INTERVAL_MOCK_DATA from '../../../../mockData/INTERVAL.json'
import makeSound from '../utils/makeSound.js'

// ------------------------------------
// Constants
// ------------------------------------
export const SYNTHESIZER_REQUEST_WAVEFORMS = 'SYNTHESIZER_REQUEST_WAVEFORMS'
export const SYNTHESIZER_RECEIVE_WAVEFORMS = 'SYNTHESIZER_RECEIVE_WAVEFORMS'
export const SYNTHESIZER_REQUEST_INTERVAL = 'SYNTHESIZER_REQUEST_INTERVAL'
export const SYNTHESIZER_RECEIVE_INTERVAL = 'SYNTHESIZER_RECEIVE_INTERVAL'
export const SYNTHESIZER_CHANGE_WAVEFORM = 'SYNTHESIZER_CHANGE_WAVEFORM'
export const SYNTHESIZER_CHANGE_FREQUENCY = 'SYNTHESIZER_CHANGE_FREQUENCY'
export const SYNTHESIZER_CHANGE_DURATION = 'SYNTHESIZER_CHANGE_DURATION'
export const SYNTHESIZER_PLAY_SOUND = 'SYNTHESIZER_PLAY_SOUND'

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

export function requestInterval () {
  return {
    type: SYNTHESIZER_REQUEST_INTERVAL
  }
}

export function receiveInterval (interval) {
  return {
    type: SYNTHESIZER_RECEIVE_INTERVAL,
    payload: interval
  }
}

export function changeWaveform (e) {
  return {
    type: SYNTHESIZER_CHANGE_WAVEFORM,
    payload: e.target.value
  }
}

export function changeFrequency (value) {
  return {
    type: SYNTHESIZER_CHANGE_FREQUENCY,
    payload: +value
  }
}

export function changeDuration (e) {
  return {
    type: SYNTHESIZER_CHANGE_DURATION,
    payload: +e.target.value
  }
}

export const fetchWaveforms = () => {
  return (dispatch) => {
    dispatch(requestWaveforms())

    return dispatch(receiveWaveforms(WAVEFORMS_MOCK_DATA.waveforms))
  }
}

export const fetchInterval = () => {
  return (dispatch) => {
    dispatch(requestInterval())

    return dispatch(receiveInterval(INTERVAL_MOCK_DATA.interval))
  }
}

export const playSound = (value) => {
  return (dispatch, getState) => {
    dispatch(changeFrequency(value))
    makeSound(
      getState().synthesizer.waveform,
      getState().synthesizer.frequency,
      getState().synthesizer.duration
    )
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SYNTHESIZER_REQUEST_WAVEFORMS]: (state) => {
    return ({
      ...state,
      fetchingWaveforms: true
    })
  },
  [SYNTHESIZER_RECEIVE_WAVEFORMS]: (state, action) => {
    return ({
      ...state,
      waveforms: action.payload,
      fetchingWaveforms: false
    })
  },
  [SYNTHESIZER_REQUEST_INTERVAL]: (state) => {
    return ({
      ...state,
      fetchingInterval: true
    })
  },
  [SYNTHESIZER_RECEIVE_INTERVAL]: (state, action) => {
    return ({
      ...state,
      interval: action.payload,
      fetchingInterval: false
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
  },
  [SYNTHESIZER_PLAY_SOUND]: (state) => {
    return ({
      ...state
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetchingWaveforms: false,
  fetchingInterval: false,
  waveforms: [],
  interval: [],
  waveform: 'sine',
  frequency: 250,
  duration: 500
}

export default function synthesizerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
