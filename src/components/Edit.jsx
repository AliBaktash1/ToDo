import React from 'react'

export const Edit = ({editTodo,task}) => {
    const [value, setValue] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(value,task.id)
        setValue('')
    }
  return (
    <form onSubmit={handleSubmit} className='mb-4 font-primary w-full'>
        <input type="text" className='outline-none border-gray-500 p-4 w-[300px] mb-8 rounded  placeholder:text-gray-300' name="" id="" placeholder='Update Task' onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button className='bg-gray-700 border-none p-4 text-white cursor-pointer rounded mr-1'>Update Task</button>
    </form>
  )
}

