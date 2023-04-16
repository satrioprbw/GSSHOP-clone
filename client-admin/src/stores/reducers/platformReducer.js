const defaultValue = { dataPlatform: [], dataPlatformChanges: '' }

export default function platformReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'fetch/platform':
      return {
        ...state,
        dataPlatform: action.payload
      }
    case 'add/platform':
      return {
        ...state,
        dataPlatformChanges: action.payload
      }
    case 'edit/platform':
      return {
        ...state,
        dataPlatformChanges: action.payload
      }
    case 'delete/platform':
      return {
        ...state,
        dataPlatformChanges: action.payload
      }
    default:
      return state
  }
}