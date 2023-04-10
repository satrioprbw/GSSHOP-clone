import React from "react"

function ProductDetail() {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 ps-10 pt-10">
          <div>
            <img className="h-auto content-center max-w-full rounded-lg" src="https://i.ytimg.com/vi/Id2EaldBaWw/maxresdefault.jpg" alt="" />
          </div>
          <div className="flex flex-col ps-10">
            <h1 className="text-3xl font-bold">Resident Evil 4 Remake</h1>
            <p>Genre        : Horror</p>
            <p>Platform     : PS5</p>
            <p>Publisher    : Capcom</p>
            <p>Release Date : 24 Maret 2023</p>
          </div>
        </div>
        <div className="ps-10 pt-10">
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