import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';
import CarValue from './CarValue';

export default function CarList () {
  const dispatch = useDispatch();
  let totalValue = 0;
  const {cars, formName }= useSelector(({ form, cars: { list, searchTerm }}) => {
    const filtered = list.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return {
      cars: filtered,
      formName: form.name.toLowerCase()
    }
  });

  const renderedList = cars.map(({name, value, id }) => {
    const bold = formName && name.toLowerCase().includes(formName);
    totalValue += value;
    return (
      <div key={id} className={`panel ${bold && 'bold'}`}>
        <p>{name} - ${value}</p>
        <button className='button is-danger' onClick={() => dispatch(removeCar(id))}>Delete</button>
      </div>
    )
  })
  
  return (
    <>
      <div className='car-list'>
        {renderedList}
      </div>
      <CarValue totalValue={totalValue} />
    </>
  )
}