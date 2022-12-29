import React from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from '../../hooks/useSort';

export default function SortableTable (props) {
  const { config, data } = props;
  const { order, sortBy, sortedData, sortByLabel } = useSort(data);

  const getIcons = (label) => {
    if (label !== sortBy)
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    return order > 0 ? <GoArrowSmallUp/> : <GoArrowSmallDown/>;
  };

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) return col;
    return {
      ...col,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-300"
          onClick={() => sortByLabel(col.label, col.sortValue)}
        >
          <div className="flex items-center">
            {getIcons(col.label)}
            {col.label}
          </div>
        </th>
      ),
    };
  });
    
  return (
    <>
      <Table {...props} config={updatedConfig} data={sortedData} />
    </>
  )
}