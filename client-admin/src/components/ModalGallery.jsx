
export default function ModalGallery({ image }) {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div>
            <div className="grid grid-cols-4 md:grid-cols-1 gap-4">
              {image.map(img => {
                return (
                  <div key={img.id} >
                    <img className="h-fit rounded-lg" src={img.imgUrl} alt="" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}