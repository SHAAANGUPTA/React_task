import { useState, useEffect } from 'react';
import axios from "axios"

function App() 
{
  const[title,setTitle]= useState({})
  const[id,setId]= useState(1)
  const[idFromButton, setIdFromButton]= useState(1)
  const handleClick= () => {
    setIdFromButton(id)
  }
  
  useEffect(() =>{ 
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res =>{
      console.log(res)
      setTitle(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[idFromButton])  

  return(
  <div className="App">
    <input type="text" value ={id} onChange={e =>setId(e.target.value)}></input>
   
     <button type= "button" onClick={handleClick}>Get Title</button>
     <div>{title.title}</div>
  </div>)
}

export default App;
