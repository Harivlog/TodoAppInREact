import React, { useState } from 'react'
import './todo.css'
function Todo() {
    const array = [
        {
            id : 0,
            name : "Haris",
            Age : 22,
            class : "BSCS"
        },
        {
            id : 1,
            name : "Haider",
            Age : 22,
            class : "BSCS"
        },
        {
            id  : 2,
            name : "Umar",
            Age : 22,
            class : "BSCS"
        },
    ]
  const [Array, setArray] = useState(array)
  const [Changerbg, setChangerbg] = useState('white')
  const deleteTodo = ()=>{
      setArray([])
      alert("Delete All Todos Successfully")
    }
    const DeleteTodoItem = (e)=>{
       const myNewArray = Array.filter(ele =>{
           console.log(ele)
           return ele.id !== e
        })
      setArray(myNewArray)        
        
  }
  
  const Changer = ()=>{
     setChangerbg("red")
     const color = "black";
     (Changerbg === 'white') ? setChangerbg(color) : setChangerbg('white')
     
  }
    return (
    <>
       <div className='Todo-container' style={{background : `${Changerbg}`}}>
           {
               Array.map((e)=>{ 
                 return(
                    <div key={e.id} className="todoItem">
                        <h2 >Name {e.name} Age {e.Age} class {e.class}</h2>
                    <button onClick={()=> DeleteTodoItem(e.id)}  >Delete</button>
                    </div>
                    )
               })
            }
            <button className='btn' onClick={deleteTodo}>Delete All List</button>
            <button onClick={Changer}>Background Changer</button>
       </div>
    </>
  )
}

export default Todo