import React, { useContext } from 'react';
import NavContext from "../comps/NavContext";

export default function useNav() {
  return useContext(NavContext);
};