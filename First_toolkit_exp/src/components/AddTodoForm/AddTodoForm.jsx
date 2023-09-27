import React from 'react'
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/slice/todo_slice/todo_slice';
import s from './index.module.css'

export default function AddTodoForm() {
  const dispatch = useDispatch()

  const submit = e => {
    e.preventDefault();
    const new_task = {
        id: Date.now(),
        title: e.target.title.value,
        completed: false,
    }
    dispatch(addNewTask(new_task))
    e.target.reset()
  }
  
  return (
    <form onSubmit={submit} className={s.inputs}>
        <input name='title' type='text' placeholder='Type new task here' />
        <button>Add new task</button>
    </form>
  )
}
