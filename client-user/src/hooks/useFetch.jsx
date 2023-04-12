import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

export default function useFetch(url, itemName) {
  const data = useSelector(state => state[itemName])
  const dispatch = useDispatch()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if (data.length > 0) {
      return
    }

    setLoading(true)

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Something wrong!")
        return res.json()
      })
      .then((res) => {
        dispatch({ type: `fetch/${itemName}`, payload: res })
      })
      .catch((err) => {
        setError(err?.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [data, itemName])

  return {
    data
  }
}
