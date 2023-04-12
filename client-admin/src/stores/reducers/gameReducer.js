const defaultValue = { game: [] }

export default function gameReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'fetch/game':
      return {
        ...state,
        game: action.payload
      }
    default:
      return state
  }
}