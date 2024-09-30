import React from 'react'
import { Form } from './Form'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo'
import { Edit } from './Edit'
uuidv4() 
export const TodoList = () => {
    const [todoValues, setTodoValues] = React.useState([])
    const createTodo = (todo) => {
      setTodoValues([...todoValues, {id:uuidv4(),task:todo,isEditing:false}])
      // console.log(todoValues)
    }
    const deleteTodo = (id) => {
        setTodoValues(todoValues.filter((todo) => todo.id !== id))
    }
    const editTodo = (id) => {
        setTodoValues(todoValues.map((todo) => todo.id === id ? {...todo,isEditing:!todo.isEditing} : todo))
    }
    const editTask = (task,id) => {
        setTodoValues(todoValues.map((todo) => todo.id === id ? {...todo,task,isEditing:!todo.isEditing} : todo))
    }
  return (
    <div className='container bg-blue-950  p-8 rounded-md w-[100vw] h-[100vh]'>
        <Form  createTodo={createTodo}/>
        {
            todoValues.map((todo,idx) => (
                todo.isEditing ?(
                   <Edit editTodo={editTask} task={todo} key={idx} />
                ):(
                    <Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))
        }
    </div>
  )
}
