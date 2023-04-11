import React from "react"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"

function ProductDetail() {
  let { data } = useFetch("http://localhost:3000/products?_expand=platform&_embed=images")
  const { slug } = useParams()
  data = data.filter(el => el.slug === slug)
  console.log(data);
  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 ps-10 pt-10">

          <div class="grid gap-4">
            {data[0]?.images?.map((el, i) => {
              if (i === 0) {
                return (
                  <div>
                    <img class="h-auto max-w-full rounded-lg" src={el?.imgUrl} alt="" />
                  </div>
                )
              } else {
                return (
                  <div class="grid grid-cols-5 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={el?.imgUrl} alt="" />
                    </div>
                  </div>
                )

              }
            })}
          </div>

          <div className="flex flex-col ps-10">
            <h1 className="text-3xl font-bold">{data[0]?.name}</h1>
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