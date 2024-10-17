import React from "react"
import {useState} from "react"
import Data from "./data"
import "./App.css"

const Search = () =>{
  const [store,setstore] = useState(Data)
  const [data,setData] = useState("")

  const getData = (e) =>{
    const inputValue = e.target.value.toLowerCase()
    setData(inputValue)
  }

  let filterOut = store.filter((e)=>{
    return e.title.toLowerCase().includes(data) || e.price.toString().includes(data)
  })

  return(
    <div className="input_continar">
      <input className="input" type="text" placeholder="Search Here...." onChange={getData} />
      <div className="card_continar">

      {
        filterOut.map((e)=>{
          return(
            
            
            <div className="card">
            <img src={e.image} />
            <h2>{e.title}</h2>
            <h3>${e.price}</h3>
            <h4>rating: {e.rating.rate}({e.rating.count})</h4>
          </div>
        )
      })
    }
    </div>
    </div>
    
  )
}

export default Search



