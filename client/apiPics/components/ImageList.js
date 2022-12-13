import React from "react";
import ImageShow from "./ImageShow";
import './styles.css';

export default function imageList({ images }) {

  const renderImages = images.map((image) => (
    <ImageShow key={image.id} src={image.urls.small} alt={image.alt_description} />
  ));

  return <div className="image-list">{images && renderImages}</div>;
}
