import { redirect, useNavigate } from "react-router-dom"
import { FETCH_PRODUCT_SUCCEEDED, FETCH_PLATFORM_SUCCEEDED, LOGIN_USER_SUCCEEDED } from "./actionType"

function fetchGame(payload) {
  return {
    type: FETCH_PRODUCT_SUCCEEDED,
    payload
  }
}

function fetchPlatform(payload) {
  return {
    type: FETCH_PLATFORM_SUCCEEDED,
    payload
  }
}

function login(payload) {
  return {
    type: LOGIN_USER_SUCCEEDED,
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
      dispatch(login(jsonData.access_token))
    } catch (error) {
      console.log(error);
    }
  }
}

export function handleRegister(inputRegister) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputRegister)
      });
      const jsonData = await response.json()
      redirect('/')
    } catch (error) {
      console.log(error);
    }
  }
}