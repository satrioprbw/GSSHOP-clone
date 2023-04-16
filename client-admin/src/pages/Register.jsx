import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleRegister } from "../stores/actions/actionCreator";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [registerInput, setRegisterInput] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmit(e){
    e.preventDefault()

    dispatch(handleRegister(registerInput))
    .then(res => {
      setRegisterInput({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      })
      navigate('/')
    })
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <img src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dwf736a15a/images/svg-icons/logo-gs-mono.svg" className="h-10 text-center max-w-lg mx-auto" alt="GSSHOP Logo" />
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register New Admin</h5>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
            <input value={registerInput.username} onChange={handleInputChange} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="johndoe" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <input value={registerInput.email} onChange={handleInputChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
            <input value={registerInput.password} onChange={handleInputChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
            <input value={registerInput.phoneNumber} onChange={handleInputChange} type="text" name="phoneNumber" id="phoneNumber" placeholder="+62 " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
            <input value={registerInput.password} onChange={handleInputChange} type="text" name="address" id="address" placeholder="Sudirman St" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        </form>
      </div>
    </div>

  )
}