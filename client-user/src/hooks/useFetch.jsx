import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Something wrong!")
        return res.json()
      })
      .then((res) => {
        setData(res)
        setLoading(false)
      })
  }, [])

  return {
    data
  }
}
