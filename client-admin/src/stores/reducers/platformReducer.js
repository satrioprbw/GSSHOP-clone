const defaultValue = { platform: [] }

export default function platformReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'fetch/platform':
      return {
        ...state,
        platform: action.payload
      }
    default:
      return state
  }
}