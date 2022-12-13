import React from "react";
import './styles.css';

export default function ImageShow({src, alt}) {

  return (
      <img src={src} alt={alt} />
  );
}
