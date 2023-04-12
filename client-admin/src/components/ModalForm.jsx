
export default function ModalForm({ dataPlatform }) {
  return (
    <>
      <input type="checkbox" id="addProduct" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h2 className="text-4xl">Add New Product</h2>
          <form className="space-y-6 mt-5" action="#">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <input type="text" name="description" id="description" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
              <input type="text" name="genre" id="genre" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="publisher" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publisher</label>
              <input type="text" name="publisher" id="publisher" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="mainImg" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Main Image Url</label>
              <input type="text" name="mainImg" id="mainImg" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div>
              <label htmlFor="platform" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Platform</label>
              <select name="platform" id="platform">
                {dataPlatform.map(el => {
                  return (
                    <option key={el.id} value={el.id}>{el.name}</option>
                  )
                })}
              </select>
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
              </div>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
          </form>
          <div className=" modal-action flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <label htmlFor="addProduct" className="btn">Close</label>
          </div>
        </div>
      </div>
    </>
  )
}