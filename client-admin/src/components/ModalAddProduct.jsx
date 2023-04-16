import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCreateProducts } from "../stores/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function ModalAddProduct() {

  const [formState, setFormState] = useState({
    name: '',
    description: '',
    genre: '',
    publisher: '',
    platformId: 1,
    mainImg: '',
    release_date: ''
  });

  const [imgUrl, setImgUrl] = useState(['', ''])
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const dataPlatform = useSelector(state => state.platform.dataPlatform)

  function handleFieldImgUrl() {
    const newImgUrl = [...imgUrl]
    if (newImgUrl.length >= 5) {
      return null
    } else {
      newImgUrl.push('')
      setImgUrl(newImgUrl)
    }
  }

  const handleInputImgUrl = (value, index) => {

    // newImgUrl -> salinan dari imgUrl [''. '']
    const newImgUrl = JSON.parse(JSON.stringify(imgUrl))
    newImgUrl[index] = value
    // newImgUrl[index] = value
    setImgUrl(newImgUrl)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(handleCreateProducts({ ...formState, imgUrl }))
      .then(res => {
        navigate('/')
      })


  };

  return (
    <>
      <input type="checkbox" id="addProduct" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-primary-content">
          <label htmlFor="addProduct" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h2 className="text-4xl">Add New Product</h2>
          <form className="space-y-6 mt-5" action="#" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
              <input value={formState.name} onChange={handleInputChange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
              <input value={formState.description} onChange={handleInputChange} type="text" name="description" id="description" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div>
              <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900 ">Genre</label>
              <input value={formState.genre} onChange={handleInputChange} type="text" name="genre" id="genre" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div>
              <label htmlFor="publisher" className="block mb-2 text-sm font-medium text-gray-900 ">Publisher</label>
              <input value={formState.publisher} onChange={handleInputChange} type="text" name="publisher" id="publisher" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div>
              <label htmlFor="platformId" className="block mb-2 text-sm font-medium text-gray-900 ">Platform</label>
              <select value={formState.platformId} onChange={handleInputChange} name="platformId" id="platformId">
                {dataPlatform.map(el => {
                  return <option key={el.id} value={el.id}>{el.name}</option>
                })}
              </select>
            </div>
            <div>
              <label htmlFor="release_date" className="block mb-2 text-sm font-medium text-gray-900 ">Release Date</label>
              <input value={formState.release_date} onChange={handleInputChange} type="text" name="release_date" id="release_date" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div>
              <label htmlFor="mainImg" className="block mb-2 text-sm font-medium text-gray-900 ">Image Url</label>
              <input value={formState.mainImg} onChange={handleInputChange} type="text" name="mainImg" id="mainImg" placeholder="Main Image Url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            {imgUrl.map((el, i) => {
              return (
                <div key={i}>
                  <input value={el} onChange={(e) => handleInputImgUrl(e.target.value, i)} type="text" name="imgUrl" id="imgUrl" placeholder="Additional Image Url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
              )
            })}
            {/* {isLoading && <LoadingSpinner style="zIndex: 99999" />} */}
            <div className="grid grid-cols-2 gap-10">
              <div className="float-left">
                <button onClick={handleFieldImgUrl} type="button" className="w-30 text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">+ Add Image</button>
              </div>
              <div>
                <label htmlFor="addProduct" type="button" className="w-20 me-3 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Cancel</label>
                <button type="submit" className="w-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}