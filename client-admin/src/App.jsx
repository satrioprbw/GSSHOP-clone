import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard.jsx'
import Categories from './pages/Categories'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Dashboard />
    {/* <Categories /> */}
    {/* <Login /> */}
    {/* <Register /> */}
    </>
  )
}

export default App
