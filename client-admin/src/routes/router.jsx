import { createBrowserRouter, redirect } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Categories from '../pages/Categories'
import Layout from '../components/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        loader: async () => {
          const user = await localStorage.access_token
          if (!user) {
            return redirect('/login')
          }
          return <Dashboard />
        }
      },
      {
        path: '/login',
        element: <Login />,
        loader: async () => {
          const user = await localStorage.access_token
          if (user) {
            return redirect('/')
          }
          return null
        }
      },
      {
        path: '/register',
        element: <Register />,
        loader: async () => {
          const user = await localStorage.access_token
          if (!user) {
            return redirect('/login')
          }
          return <Register />
        }
      },
      {
        path: '/categories',
        element: <Categories />,
        loader: async () => {
          const user = await localStorage.access_token
          if (!user) {
            return redirect('/login')
          }
          return <Categories />
        }
      }
    ]
  },

])

export default router