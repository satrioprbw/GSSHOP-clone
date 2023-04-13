
function fetchGame(payload) {
  return {
    type: 'fetch/game',
    payload
  }
}

function fetchPlatform(payload) {
  return {
    type: 'fetch/platform',
    payload
  }
}

const baseUrl = 'http://localhost:3000'

export function fetchGameData(){
  return async(dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/products')
      const jsonData = await response.json()
      dispatch(fetchGame(jsonData))
    } catch (error) {
      console.log(error);
    }
  }
}

export function fetchPlatformData(){
  return async(dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/platforms')
      const jsonData = await response.json()
      dispatch(fetchPlatform(jsonData))
    } catch (error) {
      console.log(error);
    }
  }
}