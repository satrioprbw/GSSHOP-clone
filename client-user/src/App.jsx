import React, { useEffect, useState } from "react" 
import Navbar from "./components/Navbar.jsx"
import Homepage from "./pages/Home.jsx"



function App() {
  const [data, setData] = useState(null)

  useEffect (() => {
    async function fetchData(){
      const data = await fetch('http://localhost:3000/Product')
      setData(data)
    }
    fetchData()
  })

  return (
    <>
    {/* <div>{data}</div> */}
    <Navbar />
    <Homepage data={data}/>
    </>
  )
}

export default App
