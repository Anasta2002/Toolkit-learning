import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard/UserCard'
import s from './style.module.css'

export default function Users() {
  const users = useSelector(state => state.users)
  const { list, status } = users;
  console.log(users)

  return (
    <div className={s.container}>
      {status === 'loading' && <p>Please wait few seconds more...</p>}
      {status === 'error' && <p>Something went wrong, please try it again...</p>}
      {
          list?.map(el => <UserCard key={el.id} {...el} />)
      } 
    </div>
  )
}
