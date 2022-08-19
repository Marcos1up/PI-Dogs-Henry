import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByName } from "../../redux/actions";

export default function SortByName() {
  const [asc, setAsc] = useState();

  const dispatch = useDispatch();

  function handleOrdChange(e) {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setAsc(e.target.value);
  }
  return (
    <div>
        <p>Sort by Name: </p>
      <div value ={asc}>
        <select onChange={(e) => handleOrdChange(e)}>
          <option value="asc" key="asc">
            A - Z
          </option>
          <option value="desc" key="desc">
            Z - A
          </option>
        </select>
      </div>
    </div>
  );
}
