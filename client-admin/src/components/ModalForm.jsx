import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewGame } from "../stores/actions/actionCreator";

export default function ModalForm({ dataPlatform }) {

  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    genre: '',
    publisher: '',
    platformId: 1,
    mainImg: '',
    release_date: '',
    imgUrl: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

   dispatch(addNewGame(formState))

   setIsLoading(false)
  };

  return (
    <>
      <input type="checkbox" id="addProduct" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h2 className="text-4xl">Add New Product</h2>
          <form className="space-y-6 mt-5" action="#" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
              <input value={formState.name} onChange={handleInputChange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
              <input value={formState.description} onChange={handleInputChange} type="text" name="description" id="description" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div>
              <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 ">Genre</label>
              <input value={formState.genre} onChange={handleInputChange} type="text" name="genre" id="genre" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div>
              <label htmlFor="publisher" className="block mb-2 text-sm font-medium text-gray-900 ">Publisher</label>
              <input value={formState.publisher} onChange={handleInputChange} type="text" name="publisher" id="publisher" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div>
              <label htmlFor="platformId" className="block mb-2 text-sm font-medium text-gray-900 ">Platform</label>
              <select value={formState.platformId} onChange={handleInputChange} name="platformId" id="platformId">
                {dataPlatform.map(el => {
                  return (
                    <option key={el.id} value={el.id}>{el.name}</option>
                  )
                })}
              </select>
            </div>
            <div>
              <label htmlFor="release_date" className="block mb-2 text-sm font-medium text-gray-900 ">Release Date</label>
              <input value={formState.release_date} onChange={handleInputChange} type="text" name="release_date" id="release_date" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div>
              <label htmlFor="mainImg" className="block mb-2 text-sm font-medium text-gray-900 ">Main Image Url</label>
              <input value={formState.mainImg} onChange={handleInputChange} type="text" name="mainImg" id="mainImg" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div>
              <label htmlFor="imgUrl" className="block mb-2 text-sm font-medium text-gray-900 ">Image Url</label>
              <input value={formState.imgUrl} onChange={handleInputChange} type="text" name="imgUrl" id="imgUrl" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div>
              <label htmlFor="imgUrl" className="block mb-2 text-sm font-medium text-gray-900 ">Image Url</label>
              <input value={formState.imgUrl} onChange={handleInputChange} type="text" name="imgUrl" id="imgUrl" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create</button>
          </form>
          <div className=" modal-action flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
            <label htmlFor="addProduct" className="btn">Close</label>
          </div>
        </div>
      </div>
    </>
  )
}