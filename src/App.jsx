import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [data, setData] = useState([])
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(res => res.json())
    .then(data => setData(data))
  },[])
  return (
    <>
     
    </>
  )
}

export default App
