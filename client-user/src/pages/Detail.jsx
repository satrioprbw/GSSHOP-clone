import React, { useState } from "react"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"

function ProductDetail() {
  let { data } = useFetch("http://localhost:3000/products?_expand=platform&_embed=images")
  const { slug } = useParams()
  data = data.filter(el => el.slug === slug)

  function Gallery() {
    event.preventDefault()
    const [selectedImage, setSelectedImage] = useState(
      data[0]?.images[0]?.imgUrl
    );
  
    const images = data[0]?.images?.map(el => {
      return el.imgUrl
    });
  
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
              <a href="">
              <img
                className="h-auto max-w-full rounded-lg"
                src={image}
                alt=""
                onClick={() => setSelectedImage(image)}
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
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 ps-10 pt-10">

          <Gallery />

          <div className="flex flex-col ps-10">
            <h1 className="text-3xl font-bold mb-5">{data[0]?.name}</h1>
            <p>Genre        : {data[0]?.genre}</p>
            <p>Platform     : {data[0]?.platform.name}</p>
            <p>Publisher    : {data[0]?.publisher}</p>
            <p>Release Date : {data[0]?.release_date}</p>
          </div>
        </div>
        <div className="ps-10 pt-10 pb-10">
          <h1 className="text-3xl py-5">Sinopsis</h1>
          <p className="py-3">{data[0]?.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetail