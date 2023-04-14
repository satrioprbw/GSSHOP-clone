import { createBrowserRouter, redirect } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Categories from '../pages/Categories'
import Layout from '../components/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: async () => {
      const user = await localStorage.access_token
      if (!user) {
        return redirect('/login')
      }
      return null
    },
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/categories',
        element: <Categories />
      }
    ]
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

])

export default router