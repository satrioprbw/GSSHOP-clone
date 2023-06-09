import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { fetchGameData } from "../stores/actions/actionCreator"
import { useDispatch } from "react-redux"
import { LoadingSpinner } from "../components/LoadingSpinner"

function ProductDetail() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchGameData())
    setTimeout(function () {
      setIsLoading(false)
    }, 2000);
  }, [])

  let data = useSelector(state => state.game.dataGame)
  data = data.filter(el => el.slug === slug)

  function Gallery() {
    const [selectedImage, setSelectedImage] = useState(
      data[0]?.Images[0]?.imgUrl
    );

    const images = data[0]?.Images.map(el => {
      return el.imgUrl
    });

    function handleImage(e, image) {
      e.preventDefault()
      setSelectedImage(image)
    }

    return (
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={selectedImage}
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {images?.map((image) => (
            <div key={image}>
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image}
                  alt=""
                  onClick={(e) => handleImage(e, image)}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading ? <LoadingSpinner style="zIndex: 9999" /> :
        <>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 ps-10 pt-10">

              <Gallery />

              <div className="flex flex-col ps-10">
                <h1 className="text-3xl font-bold mb-5">{data[0]?.name}</h1>
                <p className="pb-2">Genre        : {data[0]?.genre}</p>
                <p className="pb-2">Platform     : {data[0]?.Platform.name}</p>
                <p className="pb-2">Publisher    : {data[0]?.publisher}</p>
                <p className="pb-2">Release Date : {data[0]?.release_date}</p>
              </div>
            </div>
            <div className="ps-10 pt-10 pb-10">
              <h1 className="text-3xl py-5">Sinopsis</h1>
              <p className="py-3">{data[0]?.description}</p>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default ProductDetail