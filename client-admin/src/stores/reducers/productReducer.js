const defaultValue = { dataProduct: [], dataProductChanges: '' }

export default function productReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'fetch/product':
      return {
        ...state,
        dataProduct: action.payload
      }
    case 'add/product':
      return {
        ...state,
        dataProductChanges: action.payload
      }
    case 'delete/product':
      return {
        ...state,
        dataProductChanges: action.payload
      }
    case 'edit/product':
      return {
        ...state,
        dataProductChanges: action.payload
      }
    default:
      return state
  }
}