import React from "react";
// import { useSelector } from "react-redux";

export default function CarValue({totalValue}) {
  // const totalValue = useSelector(({ cars: { list, searchTerm }}) => {
  //   return list.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
  // }).reduce((acc, car) => acc + car.value, 0);


  return <div className="car-value">Total cost: ${totalValue}</div>;
}
