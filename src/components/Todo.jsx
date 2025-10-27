import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'


const Todo = () => {

 const [todolist, setTodolist] = useState(
    localStorage.getItem("todositems")
      ? JSON.parse(localStorage.getItem("todositems"))
      : []
  );

  const inputref = useRef();

  const add = () => {
    const inputText = inputref.current.value.trim()

    if (inputText === "") {
      return null;
    }

   const newtodo = {
  id: Date.now(),
  text: inputText,
  iscompleted: false
}

    setTodolist((prev)=>[...prev,newtodo])
    inputref.current.value="";
  }

  const deleteTodo=(id)=>{
    setTodolist((prvTodos)=>{
      return prvTodos.filter((todo)=>todo.id !==id)
    })
  }

  const toogle=(id)=>{
    setTodolist((prvTodos)=>{
      return prvTodos.map((todo)=>{
        if(todo.id===id){
          return{...todo,iscompleted:!todo.iscompleted}
        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    localStorage.setItem("todositems",JSON.stringify(todolist)) 
  },[todolist])
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">


      {/*--- title----*/}

      <div className='flex items-center mt-7 gap-2'>
        <img className='w-7' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>

      </div>
      {/*--- input----*/}

      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputref} className='bg-transparent border-0  outline-none flex-1 h-14  pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add  your Task' />
        <button onClick={add} className='border-none rounded-full bg-orange-700 w-32  h-14 text-white text-lg  font-medium cursor-pointer'>ADD +</button>
      </div>

      {/*--- items----*/}
      <div>
               {todolist.map((item, index) => (
          <Todoitems key={index} text={item.text} id={item.id} iscompleted={item.iscompleted} deleteTodo={deleteTodo} toogle={toogle} />
        ))}

        </div>
    </div>
  )
}

export default Todo
