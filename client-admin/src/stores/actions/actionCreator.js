import { redirect } from "react-router-dom"
import { FETCH_PRODUCT_SUCCEEDED, FETCH_PLATFORM_SUCCEEDED, LOGIN_USER_SUCCEEDED, LOGOUT_USER_SUCCEEDED, DELETE_PRODUCT_SUCCEEDED, ADD_PRODUCT_SUCCEEDED, EDIT_PRODUCT_SUCCEEDED } from "./actionType"

function login(payload) {
  return {
    type: LOGIN_USER_SUCCEEDED,
    payload
  }
}

function logout(payload) {
  return {
    type: LOGOUT_USER_SUCCEEDED,
    payload
  }
}

function fetchProducts(payload) {
  return {
    type: FETCH_PRODUCT_SUCCEEDED,
    payload
  }
}

function createProducts(payload) {
  return {
    type: ADD_PRODUCT_SUCCEEDED,
    payload
  }
}

function editProducts(payload) {
  return {
    type: EDIT_PRODUCT_SUCCEEDED,
    payload
  }
}

function deleteProducts(payload) {
  return {
    type: DELETE_PRODUCT_SUCCEEDED,
    payload
  }
}

function fetchPlatforms(payload) {
  return {
    type: FETCH_PLATFORM_SUCCEEDED,
    payload
  }
}

const baseUrl = 'http://localhost:3000'

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
    } catch (error) {
      console.log(error);
    }
  }
}

export function fetchProductData() {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/products', {
        headers: {
          access_token: localStorage.access_token
        }
      })
      const jsonData = await response.json()
      dispatch(fetchProducts(jsonData))
    } catch (error) {
      console.log(error);
    }
  }
}

export function handleCreateProducts(formInput) {
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
      dispatch(createProducts('new game added'))
    } catch (error) {
      console.log(error);
    }
  }
}

export function handleEditProducts(id, formInput) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + `/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.access_token
        },
        body: JSON.stringify(formInput)
      })
      const jsonData = await response.json()
      dispatch(editProducts(jsonData))
      redirect('/')
    } catch (error) {
      console.log(error);
    }
  }
}

export function handleDeleteProducts(id) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + `/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.access_token
        }
      })
      const jsonData = await response.json()
      console.log(jsonData);
      dispatch(deleteProducts(jsonData))
      redirect('/')
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
      dispatch(fetchPlatforms(jsonData))
    } catch (error) {
      console.log(error);
    }
  }
}