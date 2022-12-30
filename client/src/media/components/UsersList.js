import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';

export default function UsersList () {
  const dispatch = useDispatch();
  const [isLoadingAllUsers, setIsLoadingAllUsers] = useState(false);
  const [isLoadingUsersError, setIsLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [isCreatingUserError, setIsCreatingUserError] = useState(false);
  const { data } =  useSelector(state => state.users);

  
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
    setIsLoadingAllUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => setIsLoadingUsersError(err))
      .finally(() => setIsLoadingAllUsers(false));
  }, []);

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => setIsCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLoadingAllUsers) return <Skeleton times={6} className="h-10 w-full"/>
  if (isLoadingUsersError) return <div>{error.message}</div>;

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        { isCreatingUser ? 'Creating User...' :
          <Button success onClick={handleUserAdd}>
            + Add User
          </Button>
        }
        { isCreatingUserError && 'error' }
      </div>
      {renderedUsers}
    </div>
  );
}