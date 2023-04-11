import React from "react"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"

function ProductDetail() {
  let { data } = useFetch("http://localhost:3000/products?_expand=platform&_expand=author")
  const { slug } = useParams()
  data = data.filter(el => el.slug === slug)
  console.log(data);
  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 ps-10 pt-10">
          <div>
            <img className="h-auto content-center max-w-full rounded-lg" src={data[0]?.mainImg} alt="" />
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
          <p className="py-3">Survival is just the beginning</p>
          <p className="py-3">Resident Evil 4 is a remake of the 2005 original Resident Evil 4. Reimagined for 2023 to bring state-of-the-art survival horror.</p>
          <p className="py-3">Resident Evil 4 preserves the essence of the original game while introducing modernized gameplay, a reimagined storyline, and vividly detailed graphics to make this the latest survival horror game where life and death, terror, and catharsis intersect.</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetail