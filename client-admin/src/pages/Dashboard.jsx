import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleDeleteProducts, fetchProductData, fetchPlatformData } from "../stores/actions/actionCreator"
import ModalGallery from "../components/ModalGallery"
import ModalForm from "../components/ModalForm"
import EditForm from "../components/EditForm"

export default function Dashboard() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [image, setImage] = useState([])
  const [detailData, setDetailData] = useState('')
  const data = useSelector(state => state.product.dataProduct)
  const dataChanges = useSelector(state => state.product.dataProductChanges)

  function handleImage(data) {
    setImage(data)
  }

  function handleDelete(e, id) {
    e.preventDefault()
    dispatch(handleDeleteProducts(id))
    e.target.editProduct()
  }

  function handleEdit( id) {
    const dataById = data.filter(el => el.id === id)
    setDetailData(dataById)
  }

  useEffect(() => {
    dispatch(fetchProductData())
    dispatch(fetchPlatformData())
  }, [dataChanges])


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
                  <tr key={el.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                    <th scope="row" className="max-w-md px-6 py-4 font-medium text-gray-900 whitespace-normal dark:text-white">
                      {el.name}
                    </th>
                    <td className="px-6 py-4 max-w-sm">
                      {el.Platform.name}
                    </td>
                    <td className="px-6 py-4 max-w-sm">
                      {el.genre}
                    </td>
                    <td className="px-6 py-4 max-w-sm">
                      {el.User.username}
                    </td>
                    <td className="px-6 py-4 max-w-sm">
                      <img src={el.mainImg} alt="" />
                    </td>
                    <td className="px-6 py-4">
                      <label onClick={() => handleImage(el.Images)} htmlFor="my-modal" className="btn">More Images</label>
                    </td>
                    <td className="px-6 py-4 ">
                      <label onClick={() => handleEdit(el.id)} htmlFor="editProduct" className="btn w-20 mb-3 font-medium text-white-600 dark:text-red-500 hover:underline">Edit</label>
                      <label onClick={(e) => handleDelete(e, el.id)} href="#" className="btn font-medium text-red-600 dark:text-red-500 hover:underline">Delete</label>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <ModalGallery image={image} />

      <ModalForm />

      <EditForm detailData={detailData[0]} image={detailData[0]?.Images} />
    </>


  )
}
