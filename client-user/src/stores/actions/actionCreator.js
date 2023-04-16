import { READ_GAMES_SUCCEEDED, READ_PLATFORMS_SUCCEEDED } from "./actionType"
import Swal from 'sweetalert2'

function fetchGame(payload) {
  return {
    type: READ_GAMES_SUCCEEDED,
    payload
  }
}

function fetchPlatform(payload) {
  return {
    type: READ_PLATFORMS_SUCCEEDED,
    payload
  }
}

const baseUrl = 'https://gsshopstore.my.id'

export function fetchGameData() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/pub/products')
      if (!response.ok) {
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      }
      const jsonData = await response.json()
      dispatch(fetchGame(jsonData))
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Internal Server Error",
        icon: "error"
      });
    }
  }
}

export function fetchPlatformData() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/pub/platforms')
      if (!response.ok) {
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      }
      const jsonData = await response.json()
      dispatch(fetchPlatform(jsonData))
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Internal Server Error",
        icon: "error"
      });
    }
  }
}