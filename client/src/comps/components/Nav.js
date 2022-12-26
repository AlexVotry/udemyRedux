import React from 'react';
import Link from "./Link";

export default function Nav () {

  const links = [
    { label: "Button", path: "/button" },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Drop Down', path: '/dropdown' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' },
  ];

  const renderedLinks = links.map(link => 
    <Link 
      className="mb-3" 
      key={link.label} 
      to={link.path}
      activeClassName="font-bold border-l-4 border-blue-500 pl-2"
    >
      {link.label}
    </Link>
  )

  return (
    <div className='sticky top-0 flex flex-col items-start'>
      {renderedLinks}
    </div>
  );
}