import React, {useState} from "react";
import { FaCaretDown, FaCaretLeft } from 'react-icons/fa';

export default function Accordion({items}) {
  const [index, setIndex] = useState(-1);

  const handleClick = (i) => {
    setIndex(current => current === i ? -1 : i);
  };

  const renderedItems = items.map((item, i) => {
    const isExpanded = index === i;
    const arrow = <span className="text-2xl">{isExpanded ? <FaCaretLeft /> : <FaCaretDown />}</span>;

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-200 border-b-2 border-gray-300 items-center cursor-pointer justify-between"
          onClick={() => handleClick(i)}
        >
          {item.label} {arrow}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}
