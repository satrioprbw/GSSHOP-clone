import React from "react"

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="main">
          <div>
            <br />
            <br />
            <img src="https://www.gsshop.id/img/banner-ps5.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h1 className="py-8 text-4xl text-center">Coming Soon <span className="font-bold">Playstation 5</span></h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 ">
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center bg-slate-50">
              <img className="h-auto content-center max-w-full rounded-lg" src="https://www.gsshop.id/game/Game/PS5/RE4Remake-CoverPS5.jpg" alt="" />
            </div>
            <div className="flex justify-center">
              <a href="#">Resident Evil 4 Remake</a>
            </div>
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
          <div className="flex justify-around bg-slate-50">
            <img className="h-auto max-w-full rounded-lg" src="https://www.gsshop.id/game/Game/PS5/RE4Remake-CoverPS5.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage