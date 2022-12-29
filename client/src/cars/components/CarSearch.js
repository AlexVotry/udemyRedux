import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

export default function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.cars.searchTerm);

  return (
    <div className="list-header">
      <h3 className="title is-3">My cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input className="input" value={searchTerm} onChange={e => dispatch(changeSearchTerm(e.target.value))} />
      </div>
    </div>
  );
}
