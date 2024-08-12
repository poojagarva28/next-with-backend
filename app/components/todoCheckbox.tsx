import React from 'react'

interface ITodoCheckBox{
    todo:any
}

const TodoCheckBox = ({todo}:ITodoCheckBox) => {
  return (
    <input type="checkbox" checked={todo.completed}/>
  )
}

export default TodoCheckBox