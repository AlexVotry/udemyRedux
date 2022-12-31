import React from 'react';
import Button from './Button';
import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store/thunks/removeUser';
import { useThunk } from '../hooks/useThunk';

export default function UsersListItem ({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className='flex items-center justify'>
          <Button className="mr-3" loading={isLoading} onClick={() => doRemoveUser(user)}>
            <GoTrashcan />
          </Button>
          {error && <div>{error.message}</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}