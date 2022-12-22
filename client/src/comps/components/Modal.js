import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
// import OutsideClick from './OutsideClick';

export default function Modal ({setShow, children }) {
  const ref = useRef(null);
  // OutsideClick(ref, setShow);

  useEffect(() => {
    // prevents scrolling past the 100vh modal-bg
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return ReactDOM.createPortal(
    <>
        <div
          id="modal-bg"
          className="bg-gray-900 bg-opacity-60 fixed inset-0 h-screen grid place-items-center"
          onClick={() => setShow(false)}
        >
          <div
            id="modal"
            className="bg-blue-100 relative rounded-md p-4 w-48 h-48 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
            ref={ref}
          >
            {children}
          </div>
        </div>
    </>,
    document.querySelector('#modal')
  );
}