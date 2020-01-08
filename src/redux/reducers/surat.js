import { SET_STATUS } from '../actions/types'

const defaultState = {
  status: false
}

function homeReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_STATUS:
      return { ...state, status: !state.status }
    default:
      return state
  }
}

export default homeReducer