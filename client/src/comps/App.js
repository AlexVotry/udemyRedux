import React from 'react';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropDownPage';
import Nav from './components/Nav';
import Route from './components/Route';
import { NavProvider } from './NavContext';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';


export default function App () {

  return (
    <NavProvider>
      <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
        <Nav />
        <div className='col-span-5'>
          <Route path='/accordion'><AccordionPage /></Route>
          <Route path='/dropdown'><DropdownPage/></Route>
          <Route path='/button'><ButtonPage/></Route>
          <Route path='/modal'><ModalPage/></Route>
          <Route path='/table'><TablePage/></Route>
          <Route path='/counter'><CounterPage initalCount={1}/></Route>
        </div>
      </div>
    </NavProvider>
  );
}