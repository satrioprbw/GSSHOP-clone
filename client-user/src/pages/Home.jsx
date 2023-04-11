import React from "react"
import useFetch from "../hooks/useFetch"

function Homepage() {
  const { data } = useFetch("http://localhost:3000/products?_expand=platform&_expand=author")
  const filteredData = data.filter(el => el.platform.name === 'PS5')
  return (
    <>
      <div className="grid ">
        <div className="flex flex-col">
          <div className="flex justify-center px-10 pt-5">
            <img src="https://www.gsshop.id/img/banner-ps5.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="flex flex-col">
          <h1 className="py-8 text-4xl text-center">Coming Soon <span className="font-bold">PS5</span></h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-10">
          {filteredData.map(el => {
            return <div key={el.id} className="flex flex-col ">
              <div className="flex justify-center bg-slate-50">
                <img className="h-auto content-center max-w-full rounded-lg" src={el.mainImg} alt="" />
              </div>
              <div className="flex justify-center">
                <a href="#">{el.name}</a>
              </div>
            </div>
          })}

        </div>
      </div>
    </>
  )
}

export default Homepage