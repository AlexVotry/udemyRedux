import React from 'react';
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import Skeleton from './Skeleton';
import PhotosListItems from './PhotoListItem';
import Button from './Button';

export default function PhotoList ({ album }) {
  const {data, error, isLoading} = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();
  let content;

  if (isLoading) content = <Skeleton times={3} className="h-10 w-full" />;
  else if (error) content = <div>{error.message}</div>;
  else
    content = data.map((photo) => (
      <PhotosListItems key={photo.id} photo={photo} />
    ));

  return (
    <div>
      <div className="flex flex-row justify-between m-2 items-center">
        <h3 className="text-lg font-bold">Photos In {album.title} </h3>
        <Button
          loading={results.isLoading}
          success
          onClick={() => addPhoto(album)}
        >
          + Add Photo
        </Button>
      </div>
      <div className='mx-8 flex flex-wrap justify-center'>{content}</div>
    </div>
  );
};