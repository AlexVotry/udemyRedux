import React, {useState} from 'react';
import objSort from '../comps/utilities/sort';

export default function useSort (data) {
  const [order, setOrder] = useState(1); // 1 asc, -1 dsc
  const [sortBy, setSortBy] = useState(null);
  const [sortedData, setSortedData] = useState(data);

  const sortByLabel = (label, sortValue) => {
     let sortOrder = order;
     if (sortBy && label !== sortBy) {
       setOrder(-1);
       sortOrder = 1;
     } else setOrder((current) => current * -1);
     setSortBy(label);

     setSortedData(objSort([...data], sortValue, sortOrder));
  }

  
   return { order, sortBy, sortedData, sortByLabel };
}