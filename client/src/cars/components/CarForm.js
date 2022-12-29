import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeValue, addCar } from "../store";

export default function CarForm() {
  const dispatch = useDispatch();
  const {name, value} = useSelector(state => {
    return {
      name: state.form.name,
      value: state.form.value
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, value }));
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">

            <label className="label">Name</label>
            <input 
              className="input is-expanded" 
              type="text" 
              value={name} 
              onChange={e => dispatch(changeName(e.target.value))} 
            />

            <label className="label">Value</label>
            <input 
              className="input is-expanded" 
              type="number" 
              value={value} 
              onChange={e => dispatch(changeValue(parseInt(e.target.value) || 0))} 
            />

          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  )
}
