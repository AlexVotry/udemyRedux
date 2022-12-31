import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import UsersListItem from './UsersListItem';
import { useThunk } from '../hooks/useThunk';

export default function UsersList () {
  const [doFetchUsers, isLoadingUsers, loadingUsersErrors] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const { data } =  useSelector(state => state.users);
  let content;
  
  useEffect(() => {
    doFetchUsers();
  }, []);
  
  const handleUserAdd = () => {
    doCreateUser();
  };

  if (isLoadingUsers) content = <Skeleton times={6} className="h-10 w-full" />;
  else if (loadingUsersErrors) content = <div>{error.message}</div>;
  else content = data.map(user => <UsersListItem key={user.id} user={user}/>);

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
          <Button loading={isCreatingUser} success onClick={handleUserAdd}>
            + Add User
          </Button>
        { creatingUserError && creatingUserError.message}
      </div>
      {content}
    </div>
  );
}