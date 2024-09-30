import React from 'react'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
export const Todo = ({task,deleteTodo,editTodo}) => {
  return (
    <div className='flex justify-between items-center bg-violet-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
        <p className="font-primary">
            {task.task}
        </p>
        <div className='flex items-center gap-x-4'>
            <AiFillEdit className='text-xl cursor-pointer mr-2' onClick={()=> editTodo(task.id)} />
            <AiFillDelete className='text-xl cursor-pointer'onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
