import WAVEFORMS_MOCK_DATA from '../../../../mockData/WAVEFORMS.json'

// ------------------------------------
// Constants
// ------------------------------------
export const SYNTHESIZER_REQUEST_WAVEFORMS = 'SYNTHESIZER_REQUEST_WAVEFORMS'
export const SYNTHESIZER_RECEIVE_WAVEFORMS = 'SYNTHESIZER_RECEIVE_WAVEFORMS'

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
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  waveforms: []
}

export default function synthesizerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
