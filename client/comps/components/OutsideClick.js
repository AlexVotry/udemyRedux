import React, { useEffect } from 'react';

export default function OutsideClick (ref, stateHandler) {
  
  useEffect(() => {
    const evt = e => {
      if (!ref.current) return null;
      if (!ref.current.contains(e.target)) stateHandler(false);
    }

    document.addEventListener('click', evt, true);
    return () => {
      document.removeEventListener('click', evt, true);
  }
  }, [])

}


