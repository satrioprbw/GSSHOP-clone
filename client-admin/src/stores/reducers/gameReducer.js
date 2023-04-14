const defaultValue = { dataGame: [] }

export default function gameReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'fetch/game':
      return {
        ...state,
        dataGame: action.payload
      }
    case 'add/game':
      return {
        ...state,
        access_token: action.payload
      }
    default:
      return state
  }
}