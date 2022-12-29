import React, {createContext, useEffect, useState} from 'react';

const NavContext = createContext();

const NavProvider = ({children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    // force a rerender with forward and back buttons popstate with setCurrentPath.
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };


  return <NavContext.Provider value={{currentPath, navigate}}>
    {children}
  </NavContext.Provider>
}


export { NavProvider };
export default NavContext;