import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';

export default function DropdownPage () {
  const [selector, setSelector] = useState(null);

  const dropdown = [ 
    {label: 'Blue', value: 'blue' },
    {label: 'Red', value: 'red' },
    {label: 'Green', value: 'green' },
    {label: 'Purple', value: 'purple'},
  ];

  return (
    <div>
      <Dropdown options={dropdown} value={selector} onChange={setSelector}/>
    </div>
  )
}