
export function counterIncremented(payload) {
  return {
    type: 'counter/increment',
    payload
  }
}