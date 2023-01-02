import React from "react";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotoList";

export default function AlbumsListItems({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const header = (
    <>
      <Button
        className="mr-3"
        danger
        onClick={() => removeAlbum(album)}
      >
        <GoTrashcan />
      </Button>
      {/* {error && <div>{error.message}</div>} */}
      {album.title}
    </>
  );

  return <ExpandablePanel header={header}><PhotoList album={album} /></ExpandablePanel>;
}
