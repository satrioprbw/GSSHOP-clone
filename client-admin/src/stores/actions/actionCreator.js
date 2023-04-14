import { redirect, useNavigate } from "react-router-dom"

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

function login(payload) {
  return {
    type: 'user/login',
    payload
  }
}

const baseUrl = 'http://localhost:3000'

export function fetchGameData() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/products', {
        headers: {
          access_token: localStorage.access_token
        }
      })
      const jsonData = await response.json()
      dispatch(fetchGame(jsonData))
    } catch (error) {
      console.log(error);
    }
  }
}

export function fetchPlatformData() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/platforms', {
        headers: {
          access_token: localStorage.access_token
        }
      })
      const jsonData = await response.json()
      dispatch(fetchPlatform(jsonData))
    } catch (error) {
      console.log(error);
    }
  }
}

export function addNewGame(formInput) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.access_token
        },
        body: JSON.stringify(formInput)
      });
      redirect('/')
    } catch (error) {
      console.log(error);
    }
  }
}

export function handleLogin(inputLogin) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputLogin)
      });
      const jsonData = await response.json()
      if (!jsonData.access_token) {
        throw { name: 'invalidToken' }
      }
      localStorage.access_token = jsonData.access_token
      redirect('/')
    } catch (error) {
      console.log(error);
    }
  }
}