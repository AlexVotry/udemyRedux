import React from 'react';
import Button from './Button';
import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store/thunks/removeUser';
import { useThunk } from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

export default function UsersListItem ({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const header = (
    <>
      <Button
        className="mr-3"
        loading={isLoading}
        onClick={() => doRemoveUser(user)}
      >
        <GoTrashcan />
      </Button>
      {error && <div>{error.message}</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}