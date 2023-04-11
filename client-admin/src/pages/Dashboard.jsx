import useFetch from "../components/useFetch"

export default function Dashboard() {

  const {data} = useFetch('http://localhost:3000/products?_expand=platform&_expand=author')
  return (
    <>
<h5 className="text-4xl mb-10">Product List</h5>
<button type="button" class="flex justify-end text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">+ Add Product</button>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Platform
                </th>
                <th scope="col" class="px-6 py-3">
                    Genre
                </th>
                <th scope="col" class="px-6 py-3">
                    Created By
                </th>
                <th scope="col" class="px-6 py-3">
                    Main Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Images
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {data.map(el => {
            return (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {el.name}
                </th>
                <td class="px-6 py-4">
                    {el.platform.name}
                </td>
                <td class="px-6 py-4">
                    {el.genre}
                </td>
                <td class="px-6 py-4">
                    {el.author.username}
                </td>
                <td class="px-6 py-4">
                    <img src={el.mainImg} alt="" />
                </td>
                <td class="px-6 py-4">
                <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">More Images</button>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="ms-4 font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>
            )
          
          })}
        </tbody>
    </table>
</div>


    </>


  )
}