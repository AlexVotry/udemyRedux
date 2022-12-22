import React from 'react';
import useNav from '../../hooks/useNav';

export default function Route({ path, children}) {
  const {currentPath} = useNav();

  return path === currentPath ? children : null;
}