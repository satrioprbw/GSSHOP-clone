const defaultValue = { game: [], platform: [] }

export default function rootReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'fetch/game':
      return {
        ...state,
        game: action.payload
      }
    case 'fetch/platform':
      return {
        ...state,
        platform: action.payload
      }
    default:
      return state
  }
}