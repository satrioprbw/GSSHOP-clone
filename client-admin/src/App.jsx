import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    {/* <Dashboard /> */}
    {/* <Login /> */}
    <Register />
    </>
  )
}

export default App
