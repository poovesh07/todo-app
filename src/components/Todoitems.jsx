import React from 'react'
import tick from'../assets/tick.png'
import not_tick from'../assets/not_tick.png'
import delete_icon from'../assets/delete.png'


function Todoitems({text,id,iscompleted,deleteTodo,toogle}) {  
  return (
    <div className='flex items-center my-3 gap-2'>
        <div  onClick={()=>{toogle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img  src={iscompleted ? tick:not_tick} alt="" className='w-7' />
            <p className={`text-slate-700 ml-4 tex-[17px] decoration-slate-500
                ${iscompleted ? "line-through":""}`}>
                {text}
            </p>
        </div>
        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer'/>
    </div>
  )
}

export default Todoitems