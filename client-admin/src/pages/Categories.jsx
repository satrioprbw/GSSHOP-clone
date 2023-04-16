import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchPlatformData, handleDeletePlatforms } from "../stores/actions/actionCreator"
import ModalAddPlatform from "../components/ModalAddPlatform"
import ModalEditPlatform from "../components/ModalEditPlatform"
import { LoadingSpinner } from "../components/loadingSpinner"

export default function Categories() {

  const dispatch = useDispatch()

  const [perPlatform, setPerPlatform] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const data = useSelector(state => state.platform.dataPlatform)
  const dataChanges = useSelector(state => state.platform.dataPlatformChanges)

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchPlatformData())
    setTimeout(function () {
      setIsLoading(false)
    }, 2000);
  }, [dataChanges])

  function handlePerPlatform(id) {
    const dataById = data.filter(el => el.id === id)
    setPerPlatform(dataById)
  }

  function handleDelete(e, id) {
    e.preventDefault()
    dispatch(handleDeletePlatforms(id))
    e.target.editProduct()
  }

  return (
    <>
      {isLoading ? <LoadingSpinner style="zIndex: 9999" /> :
        <>
          <h5 className="text-4xl mb-10">Category List</h5>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <label htmlFor="addPlatform" className="btn justify-end mb-5">+ Add Category</label>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                <tr>
                  <th scope="col" className="px-6 py-3">
                    No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created At
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Updated At
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((el, i) => {
                  return (
                    <tr key={el.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {i + 1}
                      </th>
                      <td className="px-6 py-4">
                        {el.name}
                      </td>
                      <td className="px-6 py-4">
                        {el.createdAt}
                      </td>
                      <td className="px-6 py-4">
                        {el.updatedAt}
                      </td>
                      <td className="px-6 py-4 ">
                        <label onClick={() => handlePerPlatform(el.id)} htmlFor="editPlatform" className="btn w-20 mb-3 me-4 font-medium text-white-600 dark:text-red-500 hover:underline">Edit</label>
                        <label onClick={(e) => handleDelete(e, el.id)} href="#" className="btn font-medium text-red-600 dark:text-red-500 hover:underline">Delete</label>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <ModalAddPlatform />
          <ModalEditPlatform perPlatform={perPlatform[0]} />
        </>
      }
    </>

  )
}