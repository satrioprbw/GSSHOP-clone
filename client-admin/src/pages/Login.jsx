import { useState } from "react"
import { handleLogin } from "../stores/actions/actionCreator"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loginInput, setLoginInput] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginInput(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmit(e) {
    e.preventDefault()

    dispatch(handleLogin(loginInput))
      .then(res => {
        setLoginInput({
          email: '',
          password: ''
        })
        navigate('/')
      })
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <img src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dwf736a15a/images/svg-icons/logo-gs-mono.svg" className="h-10 text-center max-w-lg mx-auto" alt="GSSHOP Logo" />
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input value={loginInput.email} onChange={handleInputChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input value={loginInput.password} onChange={handleInputChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        </form>
      </div>
    </div>
  )
}