import React from 'react';
import Accordion from '../components/Accordion';

export default function AccordionPage () {

  const items = [
    {
      id: 'random1',
      label: 'Can I use React?',
      content: 'You can use React on anything'
    },
    {
      id: 'random2',
      label: 'Can I use Javascript?',
      content: 'You can use Javascript on anything'
    },
    {
      id: 'random3',
      label: 'Can I use Css?',
      content: 'You can use Css on anything'
    },
  ];

  return (
    <div className='px-10 w-2/4'>
      <Accordion items={items} />
    </div>
  )
}