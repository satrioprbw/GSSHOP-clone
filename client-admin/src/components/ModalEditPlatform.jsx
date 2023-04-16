import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleEditPlatforms } from "../stores/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function ModalEditPlatform(perPlatform) {
  const [formState, setFormState] = useState({
    name: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if(perPlatform){
      setFormState(prevState => ({name: perPlatform?.perPlatform?.name }))
    }
  }, [perPlatform])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitEdit = async (event) => {
    event.preventDefault();

    dispatch(handleEditPlatforms(perPlatform.perPlatform.id, { ...formState }))
      .then(res => {
        navigate('/categories')
      })
  };

  return (
    <>
      <input type="checkbox" id="editPlatform" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-primary-content">
          <label htmlFor="editPlatform" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h2 className="text-4xl">Edit Platform</h2>
          <form className="space-y-6 mt-5" action="#" onSubmit={handleSubmitEdit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
              <input value={formState.name} onChange={handleInputChange} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="grid grid-cols-4 ">
              <label htmlFor="editPlatform" type="button" className="col-start-3 w-20 me-3 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Cancel</label>
              <button type="submit" className=" w-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}