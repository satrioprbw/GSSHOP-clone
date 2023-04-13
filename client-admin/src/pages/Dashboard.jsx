import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGameData, fetchPlatformData } from "../stores/actions/actionCreator"
import ModalGallery from "../components/ModalGallery"
import ModalForm from "../components/ModalForm"

export default function Dashboard() {

  const [image, setImage] = useState([])
  const dispatch = useDispatch()
  
  function handleImage(data) {
    setImage(data)
  }

  useEffect(() => {
    dispatch(fetchGameData())
    dispatch(fetchPlatformData())
  }, [])
  
  const data = useSelector(state => state.game.dataGame)
  const dataPlatform = useSelector(state => state.platform.dataPlatform)

  return (
    <>
      <div>
        <h5 className="text-4xl mb-10">Product List</h5>
        <label htmlFor="addProduct" className="btn justify-end mb-5">+ Add Product</label>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Platform
                </th>
                <th scope="col" className="px-6 py-3">
                  Genre
                </th>
                <th scope="col" className="px-6 py-3">
                  Created By
                </th>
                <th scope="col" className="px-6 py-3">
                  Main Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Images
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(el => {
                return (
                  <tr key={el.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {el.name}
                    </th>
                    <td className="px-6 py-4">
                      {el.Platform.name}
                    </td>
                    <td className="px-6 py-4">
                      {el.genre}
                    </td>
                    <td className="px-6 py-4">
                      {el.User.username}
                    </td>
                    <td className="px-6 py-4">
                      <img src={el.mainImg} alt="" />
                    </td>
                    <td className="px-6 py-4">
                      <label onClick={() => handleImage(el.Images)} htmlFor="my-modal" className="btn">More Images</label>
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      <a href="#" className="ms-4 font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ModalGallery image={image} />

      <ModalForm dataPlatform={dataPlatform} />


    </>


  )
}
