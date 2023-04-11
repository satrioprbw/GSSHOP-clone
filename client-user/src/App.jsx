import React, { useEffect, useState } from "react" 
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Homepage from "./pages/Home.jsx"
import ProductDetail from "./pages/Detail.jsx"



function App() {
  const [data, setData] = useState([])

  return (
    <>
    <Navbar />
    <Homepage/>
    {/* <ProductDetail /> */}
    <Footer />
    </>
  )
}

export default App
