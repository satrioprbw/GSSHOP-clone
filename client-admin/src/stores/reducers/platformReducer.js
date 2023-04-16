const defaultValue = { dataPlatform: [], dataPlatformChanges: '' }

export default function platformReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'fetch/platform':
      return {
        ...state,
        dataPlatform: action.payload
      }
    default:
      return state
  }
}