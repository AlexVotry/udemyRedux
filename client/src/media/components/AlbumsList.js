import React from 'react';
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumsListItems from './AlbumListItems';

export default function AlbumsList({user}) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  // console.log(useFetchAlbumsQuery(user))
  const [addAlbum, results] = useAddAlbumMutation();
  let content;

  if (isLoading) content = <Skeleton times={3} className="h-10 w-full" />;
  else if (error) content = <div>{error.message}</div>;
  else content = data.map((album) => <AlbumsListItems key={album.id} album={album} />);

  return (
    <div>
      <div className="flex flex-row justify-between m-2 items-center">
        <h3 className="text-lg font-bold">Albums by {user.name} </h3>
        <Button loading={results.isLoading} success onClick={() => addAlbum(user)}>
          + Add Album
        </Button>
      </div>
      {content}
    </div>
  );
}