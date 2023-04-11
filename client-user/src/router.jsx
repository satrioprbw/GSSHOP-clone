
import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Home'
import ProductDetail from './pages/Detail'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/product',
        element: <ProductDetail />
      },
    ]
    
  }
])

export default router