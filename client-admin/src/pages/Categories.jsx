import useFetch from "../hooks/useFetch"

export default function Categories() {

  const data = useFetch('http://localhost:3000/platforms', 'platform')
  return (
    <>
    <h5 className="text-4xl mb-10">Category List</h5>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

          <tr>
            <th scope="col" class="px-6 py-3">
              No.
            </th>
            <th scope="col" class="px-6 py-3">
              Category Name
            </th>
            <th scope="col" class="px-6 py-3">
              Created At
            </th>
            <th scope="col" class="px-6 py-3">
              Updated At
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => {
            return(
          <tr key={el.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {i + 1}
            </th>
            <td class="px-6 py-4">
              {el.name}
            </td>
            <td class="px-6 py-4">
              {el.createdAt}
            </td>
            <td class="px-6 py-4">
              {el.updatedAt}
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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