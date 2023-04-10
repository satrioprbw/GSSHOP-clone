import React, { useEffect, useState } from "react" 
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Homepage from "./pages/Home.jsx"
import ProductDetail from "./pages/Detail.jsx"



function App() {
  const [data, setData] = useState([])

  useEffect (() => {
    async function fetchData(){
      const response = await fetch('http://localhost:3000/Product')
      const products = await response.json()
      return products
    }
    fetchData().then(products => {
      setData(products)
    })
  }, [])

  return (
    <>
    {/* {console.log(data[0])} */}
    <Navbar />
    {/* <Homepage data={data}/> */}
    <ProductDetail />
    <Footer />
    </>
  )
}

export default App
