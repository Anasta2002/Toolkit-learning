import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem/TodoItem'
import s from './index.module.css'
import { deleteTasks } from '../../store/slice/todo_slice/todo_slice'

export default function TodoContainer() {
  const todoState = useSelector(state => state.todos.list)
  const dispatch = useDispatch()

  return (
    <div>
      {todoState.map(el => <TodoItem key={el.id} {...el} />)}
      {todoState.length > 1 && 
        <div onClick={() => dispatch(deleteTasks())} className={s.delete_btn}>Delete all tasks</div>
      }
    </div>
  )
}
