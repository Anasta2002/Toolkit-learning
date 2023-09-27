import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { deleteTask, changeStatus } from '../../../store/slice/todo_slice/todo_slice';

export default function TodoItem({title, completed, id}) {
  const dispatch = useDispatch()
  const handleClick = e => {
    dispatch(deleteTask(id))
    e.stopPropagation()
  }

  return (
    <div className={[s.task_card, completed && s.green].join(' ')} onClick={() => dispatch(changeStatus(id))}>
      <p>Task: {title}</p>
      <p>Status: {completed ? 'done' : 'not done'}</p>
      <span className={s.close_btn} onClick={handleClick}>X</span>
    </div>
  )
}
