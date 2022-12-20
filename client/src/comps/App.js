import React from 'react';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropDownPage';

export default function App () {

  return (
    <div className='flex'>
      <ButtonPage />
      <AccordionPage/>
      <DropdownPage/>
    </div>
  );
}