const defaultValue = { access_token: '' }

export default function userReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'user/login':
      return {
        ...state,
        access_token: action.payload
      }
    default:
      return state
  }
}