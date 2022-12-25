import React, { useState } from 'react';
import objSort from '../utilities/sort';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

export default function SortableTable (props) {
  const { config, data } = props;
  const [newData, setNewData] = useState(data);
  const [order, setOrder] = useState(1); // 1 asc, -1 dsc
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label, sortValue) => {
    let sortOrder = order;
    if (sortBy && label !== sortBy) {
      setOrder(-1);
      sortOrder = 1;
    } else setOrder((current) => current * -1);
    setSortBy(label);

    setNewData(objSort([...data], sortValue, sortOrder));
  }

  const getIcons = (label) => {
    if (label !== sortBy) return <div><GoArrowSmallUp/><GoArrowSmallDown/></div>;
    if (order > 0) return <GoArrowSmallUp />;
    return <GoArrowSmallDown />;
  }

  const updatedConfig = config.map(col => {
    if (!col.sortValue) return col;
    return {
      ...col, header: () => (
      <th className="cursor-pointer hover:bg-gray-300" onClick={() => handleClick(col.label, col.sortValue)}>
        <div className='flex items-center'>
          {getIcons(col.label)} 
          {col.label}
        </div>
      </th>
      )
    }
  })

  return (
    <>
    {sortBy} {order}
      <Table {...props} config={updatedConfig} data={newData} />
    </>
  )
}