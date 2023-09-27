import React from 'react'
import s from './style.module.css'
import { deleteCard, increaseAge, decreaseAge } from '../../../store/slices/users_slice'
import { useDispatch } from 'react-redux';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export default function UserCard({id, firstName, lastName, maidenName, age}) {
  const dispatch = useDispatch()

  return (
    <div className={s.card}>
        <p>{firstName} {lastName} <b>{maidenName}</b></p>
        <div className={s.bottom_part}>
            <div onClick={() => dispatch(deleteCard(id))} className={s.close}>Delete</div>
            <span className={s.incr_decr_btns}>
                <button  onClick={() => dispatch(decreaseAge(id))}>
                    <AiOutlineArrowDown />
                </button>
                <span>Age: {age}</span>
                <button onClick={() => dispatch(increaseAge(id))}>
                    <AiOutlineArrowUp />
                </button>                 
            </span>
        </div>
    </div>
  )
}
