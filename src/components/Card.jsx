import React, { useEffect, useState } from 'react'
import Loading from './Loading'
function Card() {
  const [loading, setLoading] = useState(true)
  const [ApiArray, setApiArray] = useState([])
  useEffect(() => {
    const getUsers =async ()=>{
      // console.log(data)
      try {
        setLoading(false)
        const Api =await fetch("https://jsonplaceholder.typicode.com/posts")
        setApiArray( await Api.json())
        
      } catch (error) {
        setLoading(true)
      }
    }
    
    getUsers()

  
    
  },[])
  if(loading){
    return <Loading/> 
  }
  console.log(ApiArray)
  return (
    <>
    
      <h2>Small Project with useSatet and UseEffect</h2>
      <div className="container mt-5">
        <div className="row ">
          {ApiArray.map((e)=>{
            const {id , title , body} = e
            return(
              
          <div key={id} className="col-10  mt-5 col-md-3">
           
            <div className="card" style={{ width: '18rem' }}>
              
              <div className="card-body">
                 
                <h2 className="card-text">{title}</h2>
                <p>{body}</p>
              </div>
            </div>
          </div>
            )
          })}
          
          
          
        </div>
      </div>
    </>
  )
}

export default Card