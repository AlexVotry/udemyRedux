import React, { useRef, useState } from 'react';
import {FaCaretDown} from 'react-icons/fa';
import OutsideClick from './OutsideClick';
import Panel from './Panel';

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  OutsideClick(ref, setIsOpen);

  const updateSelection = (option) => {
    onChange(option);
    setIsOpen(false);
  }

  const renderDropdown = options.map((option) => (
    <li
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      key={option.value}
      onClick={() => updateSelection(option)}
    >
      {option.label}
    </li>
  ));

  return (
    <div className='w-48 relative' ref={ref}>
      <Panel
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer justify-between"
      >
        {value?.label || 'Select...'}
        <FaCaretDown />
      </Panel> 
      {isOpen && (<Panel className="absolute top-full">{renderDropdown}</Panel>)}
    </div>
  );
}