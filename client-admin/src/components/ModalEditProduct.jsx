import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleEditProducts } from "../stores/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function ModalEditProduct({ detailData, image }) {

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

  useEffect(() => {
    setFormState(prevState => ({ ...prevState, ...detailData }))
    if (image) {
      setImgUrl([...image.map(el => el.imgUrl)]);
    }
  }, [detailData])

  function handleFieldImgUrl(param) {

    const newImgUrl = [...imgUrl];

    if (param === 'add' && newImgUrl.length < 5) {
      setImgUrl([...newImgUrl, '']);
    } else if (param === 'delete' && newImgUrl.length > 1) {
      newImgUrl.pop();
      setImgUrl(newImgUrl);
    } else {
      return null
    }
  }

  const handleInputImgUrl = (value, index) => {

    // newImgUrl -> salinan dari imgUrl [''. '']
    // const newImgUrl = JSON.parse(JSON.stringify(imgUrl))
    const newImgUrl = [...imgUrl];
    newImgUrl[index] = value
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

    dispatch(handleEditProducts(detailData.id, { ...formState, imgUrl}))
      .then(res => {
        navigate('/')
      })
  };

  return (
    <>
      <input type="checkbox" id="editProduct" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-primary-content">
          <label htmlFor="editProduct" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h2 className="text-4xl">Edit Product</h2>
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
                  return (
                    <option key={el.id} value={el.id}>{el.name}</option>
                  )
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
                <div key={i} className="flex">
                  <span className="me-1">{i + 1}</span>
                  <input value={el} onChange={(e) => handleInputImgUrl(e.target.value, i)} type="text" name="imgUrl" id="imgUrl" placeholder="Additional Image Url" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 " />
                </div>
              )
            })}
            <div className="grid grid-cols-2 gap-10">
              <div className="float-left">
                <button onClick={() => handleFieldImgUrl('add')} type="button" className="w-20 me-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">+ Image</button>
                <button onClick={() => handleFieldImgUrl('delete')} type="button" className=" w-20 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">- Image</button>
              </div>
              <div>
                <label htmlFor="editProduct" type="button" className="w-20 me-3 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Cancel</label>
                <button type="submit" className="w-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Edit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}