import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchGameData } from "../stores/actions/actionCreator"
import { useState } from "react"
import { LoadingSpinner } from "../components/LoadingSpinner"

function Homepage() {
  const { platform } = useParams()
  const [isLoading, setIsLoading] = useState(false);
  let data = useSelector(state => state.game.dataGame)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchGameData())
    setTimeout(function () {
      setIsLoading(false)
    }, 2000);
  }, [])

  if (platform) {
    data = data.filter(el => el.Platform.name === platform)
  }

  return (
    <>
      {isLoading ? <LoadingSpinner style="zIndex: 9999" /> :
        <>
          <div className="grid ">
            <div className="flex flex-col">
              <div className="flex justify-center px-10 pt-5">
                { }
                <img src={`https://www.gsshop.id/img/banner-${platform !== 'Nintendo Switch' && platform ? platform.toLowerCase() : 'switch'}.jpg`} alt="" />
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="flex flex-col">
              <h1 className="py-8 text-3xl text-center font-normal">Coming Soon <span className="font-bold">{platform}</span></h1>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-8 mb-10">
              {data.map(el => {
                if (new Date(el.release_date) > new Date()) {
                  return <Link to={`/product/${el.slug}`} key={el.id} className="flex flex-col ">
                    <div className="flex justify-center bg-slate-50">
                      <img className="h-auto content-center max-w-[50%] rounded-lg" src={el.mainImg} alt="" />
                    </div>
                    <div className="flex justify-center">
                      <p className="text-blue-500 text-xl text-center" href="#">{el.name}</p>
                    </div>
                  </Link>
                } else {
                  return null
                }
              })}
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="grid">
            <div className="flex flex-col">
              <h1 className="py-8 text-3xl text-center font-normal">New Release <span className="font-bold">{platform}</span></h1>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-8 mb-10">
              {data.map(el => {
                if (new Date(el.release_date) < new Date()) {
                  return <Link to={`/product/${el.slug}`} key={el.id} className="flex flex-col ">
                    <div className="flex justify-center bg-slate-50">
                      <img className="h-auto content-center max-w-[50%] rounded-lg" src={el.mainImg} alt="" />
                    </div>
                    <div className="flex justify-center">
                      <p className="text-blue-500 text-xl text-center" href="#">{el.name}</p>
                    </div>
                  </Link>
                } else {
                  return null
                }
              })}
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="grid">
            <div className="flex flex-col">
              <h1 className="py-8 text-3xl text-center">Popular Games <span className="font-bold">{platform}</span></h1>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 ps-10">
              {data.slice(0, 3).map(el => {
                return (
                  <>
                    <div className="grid gap-6 pb-10 my-auto justify-end">
                      <div>
                        <a href={`/product/${el.slug}`}>
                        <img
                          className="h-auto max-w-md  rounded-lg"
                          src={el?.Images[0]?.imgUrl}
                          alt=""
                        />
                        </a>
                      </div>
                    </div>
                    <div className="ps-10 pb-10 my-auto">
                      <a href={`/product/${el.slug}`}>
                      <h1 className="text-3xl py-5">{el?.name}</h1>
                      </a>
                      <a href={`/product/${el.slug}`} className="py-3 max-w-xl">{el?.description}</a>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Homepage