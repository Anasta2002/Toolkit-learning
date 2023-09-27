import './App.css';
import Users from './components/Users/Users';
import React, { useEffect } from 'react';
import { fetchUsers } from './store/slices/users_slice';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
      <div className='page'>
        <Users />
      </div>
  );
}

export default App;
