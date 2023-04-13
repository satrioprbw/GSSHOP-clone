import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchGameData } from "../stores/actions/actionCreator"

function Homepage() {
  // let data = useFetch("http://localhost:3000/products?_expand=platform&_expand=author", "game")
  const dispatch = useDispatch()
  const { platform } = useParams()
  let data = useSelector(state => state.game.dataGame)

  useEffect(() => {
    dispatch(fetchGameData())
  }, [])

  if(platform){
    data = data.filter(el => el.platform.name === platform )
  } 

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
          <h1 className="py-8 text-4xl text-center">Coming Soon <span className="font-bold">{platform}</span></h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-10">
          {data.map(el => {
            return <Link to={`/product/${el.slug}`} key={el.id} className="flex flex-col ">
              <div className="flex justify-center bg-slate-50">
                <img className="h-auto content-center max-w-full rounded-lg" src={el.mainImg} alt="" />
              </div>
              <div className="flex justify-center">
                <p href="#">{el.name}</p>
              </div>
            </Link>
          })}

        </div>
      </div>
    </>
  )
}

export default Homepage