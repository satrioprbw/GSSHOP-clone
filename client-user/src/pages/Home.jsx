import React from "react"

function Homepage(data) {
  return (
    <>
      {console.log(data)};
      <div className="grid ">
        <div className="flex flex-col">
          <div className="flex justify-center px-10 pt-5">
            <img src="https://www.gsshop.id/img/banner-ps5.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="flex flex-col">
          <h1 className="py-8 text-4xl text-center">Coming Soon <span className="font-bold">Playstation 5</span></h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 ">
          {/* {data.forEach(el => { */}
            <div className="flex flex-col ">
              <div className="flex justify-center bg-slate-50">
                <img className="h-auto content-center max-w-full rounded-lg" src="" alt="" />
              </div>
              <div className="flex justify-center">
                <a href="#"></a>
              </div>
            </div>
          {/* })} */}
          <div className="flex justify-around bg-slate-50">
            <img className="h-auto max-w-full rounded-lg" src="https://www.gsshop.id/game/Game/PS5/RE4Remake-CoverPS5.jpg" alt="" />
          </div>
          <div className="flex justify-around bg-slate-50">
            <img className="h-auto max-w-full rounded-lg" src="https://www.gsshop.id/game/Game/PS5/RE4Remake-CoverPS5.jpg" alt="" />
          </div>
          <div className="flex justify-around bg-slate-50">
            <img className="h-auto max-w-full rounded-lg" src="https://www.gsshop.id/game/Game/PS5/RE4Remake-CoverPS5.jpg" alt="" />
          </div>
          <div className="flex justify-around bg-slate-50">
            <img className="h-auto max-w-full rounded-lg" src="https://www.gsshop.id/game/Game/PS5/RE4Remake-CoverPS5.jpg" alt="" />
          </div>
          <div className="flex justify-around bg-slate-50">
            <img className="h-auto max-w-full rounded-lg" src="https://www.gsshop.id/game/Game/PS5/RE4Remake-CoverPS5.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage