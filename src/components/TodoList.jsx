import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './todo.css'

const getLocalItems = () => {
  let list = localStorage.getItem('lists');

  if (list) {
    return JSON.parse(localStorage.getItem('lists'))
  } else {
    return []
  }
}
function TodoList() {
  const [TodoData, setTodoData] = useState([])
  const [StoreTodo, setStoreTodo] = useState(getLocalItems())
  const [ToggleItem, setToggleItem] = useState(true)
  const [EditItem, setEditItem] = useState(null)
  const DeleteAllTodo = () => {
    toast.success("All Todo's Deleted Successfully")
    setStoreTodo([])
  }



  const AddTodo = () => {
    setTodoData([])
    if (!TodoData) {

      toast.error("You Can'not add empty Todo")
      // setStoreTodo([...StoreTodo, TodoData])
    }
    else if (TodoData && !ToggleItem) {
      setStoreTodo(
        StoreTodo.map((e) => {
          if (e.id === EditItem) {
            return { ...e, name: TodoData }
          }
          return e

        })
      )
      toast.success("Todo's Edit Successfully 👍")

      setToggleItem(true)
      setTodoData('')
      setEditItem(null)
      console.log(StoreTodo)
    }
    else {
      const allInputData = { id: new Date().getTime().toString(), name: TodoData }
      setStoreTodo([...StoreTodo, allInputData])
      setTodoData('')

    }

  }


  const DltTodoItem = (e) => {
    if (e) {
      const updateTodo = StoreTodo.filter((ele) => {
        return e !== ele.id
      })
      setStoreTodo(updateTodo)
      console.log(StoreTodo.length)
    }
    else {
      
    }
    if(StoreTodo.length === 1){
     toast.success("There Is no more Task 🐱‍👤 ")
     console.log("haha")  
   }

  }

  const EditTodoItem = (id) => {
    const updateValue = StoreTodo.find((ele) => {
      return ele.id === id
    })
    setToggleItem(false)
    setTodoData(updateValue.name)
    setEditItem(id)

  }
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(StoreTodo))
  }, [StoreTodo])

  return (
    <>
      <div className='Todo-container'>
        <div className="todo-wrap">
        <h2>Add Your Todo List Here ✌</h2>
        <button className='btn' onClick={DeleteAllTodo}>Clear All List</button>

        <div className='input-wrapper'>
          {/* <span>📜</span> */}
          <input type="text" value={TodoData} placeholder="📜Write Your task Here..." onChange={(e) => setTodoData(e.target.value)} />

          <button onClick={AddTodo}>{(ToggleItem) ? "➕" : "Edit"}</button>
        </div>

        <div className="TodoItemwrapper">
        {StoreTodo.map((e) => {
          return (
            <div key={e.id} className="todoItem">
              <h3 >{e.name} </h3>
              <div className='btn-item'>
                <button className='btnn-item' onClick={() => EditTodoItem(e.id)}>Edit</button>
                <button className='btnn-item' onClick={() => DltTodoItem(e.id)}>Delete</button>
              </div>
            </div>
          )
        })}
        </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default TodoList