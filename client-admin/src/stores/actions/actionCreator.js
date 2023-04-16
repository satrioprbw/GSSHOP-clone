import { redirect } from "react-router-dom"
import Swal from 'sweetalert2'
import { FETCH_PRODUCT_SUCCEEDED, FETCH_PLATFORM_SUCCEEDED, LOGIN_USER_SUCCEEDED, DELETE_PRODUCT_SUCCEEDED, ADD_PRODUCT_SUCCEEDED, EDIT_PRODUCT_SUCCEEDED, ADD_PLATFORM_SUCCEEDED, EDIT_PLATFORM_SUCCEEDED, DELETE_PLATFORM_SUCCEEDED } from "./actionType"

function login(payload) {
  return {
    type: LOGIN_USER_SUCCEEDED,
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

function createPlatforms(payload) {
  return {
    type: ADD_PLATFORM_SUCCEEDED,
    payload
  }
}

function editPlatforms(payload) {
  return {
    type: EDIT_PLATFORM_SUCCEEDED,
    payload
  }
}

function deletePlatforms(payload) {
  return {
    type: DELETE_PLATFORM_SUCCEEDED,
    payload
  }
}

const baseUrl = 'https://gsshopstore.my.id'

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
      if (!response.ok) {
        if(response.status === 400){
          Swal.fire({
            title: "Error Login!",
            text: 'Email & Password are required',
            icon: "error"
          });
        } else {
          Swal.fire({
            title: "Error Login!",
            text: 'Invalid Email/Password ',
            icon: "error"
          });
        }
      }
      const jsonData = await response.json()
      if (!jsonData.access_token) {
        throw { name: 'invalidToken' }
      }
      localStorage.access_token = jsonData.access_token
      dispatch(login(jsonData.access_token))
      Swal.fire({
        title: "Success Login!",
        text: '',
        icon: "success"
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error Login!",
        text: "Internal Server Error",
        icon: "error"
      });
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
      console.log(response);
      if (!response.ok) {
          Swal.fire({
            title: "Error Register!",
            text: 'Invalid Input Format',
            icon: "error"
          });
      } else {
        Swal.fire({
          toast: true,
          position: 'top',
          title: "Success Register!",
          text: '',
          icon: "success",
          timer: 2500,
          showConfirmButton: false
        });
      }
      const jsonData = await response.json()
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error Register!",
        text: "Internal Server Error",
        icon: "error"
      });
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
      if(!response.ok){
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      }
      const jsonData = await response.json()
      dispatch(fetchProducts(jsonData))
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
      if(!response.ok){
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      } else {
        Swal.fire({
          toast: true,
          position: 'top',
          title: "Success Add Product!",
          text: '',
          icon: "success",
          timer: 2500,
          showConfirmButton: false
        });
      }
      redirect('/')
      dispatch(createProducts('new game added'))
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
      if(!response.ok){
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      } else {
        Swal.fire({
          toast: true,
          position: 'top',
          title: "Success Edit Product!",
          text: '',
          icon: "success",
          timer: 2500,
          showConfirmButton: false
        });
      }
      const jsonData = await response.json()
      dispatch(editProducts(jsonData))
      redirect('/')
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
      if(!response.ok){
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      }
      Swal.fire({
        toast: true,
        position: 'top',
        title: "Success Delete Product!",
        text: '',
        icon: "success",
        timer: 2500,
        showConfirmButton: false
      });
      const jsonData = await response.json()
      dispatch(deleteProducts(jsonData))
      redirect('/')
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
      const response = await fetch(baseUrl + '/platforms', {
        headers: {
          access_token: localStorage.access_token
        }
      })
      if(!response.ok){
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      }
      const jsonData = await response.json()
      dispatch(fetchPlatforms(jsonData))
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

export function handleCreatePlatforms(formInput) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + '/platforms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.access_token
        },
        body: JSON.stringify(formInput)
      })
      if(!response.ok){
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      }
      Swal.fire({
        toast: true,
        position: 'top',
        title: "Success Add Platform!",
        text: '',
        icon: "success",
        timer: 2500,
        showConfirmButton: false
      });
      const jsonData = await response.json()
      dispatch(createPlatforms(jsonData))
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

export function handleEditPlatforms(id, formInput) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + `/platforms/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.access_token
        },
        body: JSON.stringify(formInput)
      })
      if(!response.ok){
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      }
      Swal.fire({
        toast: true,
        position: 'top',
        title: "Success Edit Platform!",
        text: '',
        icon: "success",
        timer: 2500,
        showConfirmButton: false
      });
      const jsonData = await response.json()
      dispatch(editPlatforms(jsonData))
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

export function handleDeletePlatforms(id) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + `/platforms/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.access_token
        }
      })
      if(!response.ok){
        Swal.fire({
          title: "Error!",
          text: response.statusText,
          icon: "error"
        });
      }
      Swal.fire({
        toast: true,
        position: 'top',
        title: "Success Delete Platform!",
        text: '',
        icon: "success",
        timer: 2500,
        showConfirmButton: false
      });
      const jsonData = await response.json()
      dispatch(deletePlatforms(jsonData))
      redirect('/categories')
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