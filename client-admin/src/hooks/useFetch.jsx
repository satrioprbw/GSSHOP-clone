import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Something wrong!")
        return res.json()
      })
      .then((res) => {
        setData(res)
      })
  }, [])

  return {
    data
  }
}
