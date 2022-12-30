import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';

export default function UsersList () {
  const dispatch = useDispatch();
  const { isLoading, data, error } =  useSelector(state => state.users);

  
  const renderedUsers = data.map(({name, id}) => {
    return (
      <div key={id} className="mb-2 border rounded">
        <div className='flex p-2 justify-between items-center cursor-pointer'>
          {name}
        </div>
      </div>
    )
  })
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleUserAdd = () => dispatch(addUser());

  if (isLoading && data.length === 0) return <Skeleton times={6} className="h-10 w-full"/>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button success onClick={handleUserAdd}>
          + Add User
        </Button>
      </div>
      {renderedUsers}
    </div>
  );
}