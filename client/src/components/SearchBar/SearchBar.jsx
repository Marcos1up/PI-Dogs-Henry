import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/actions";
import style from "./search.module.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input !== "") {
      dispatch(getDogByName(input));
      setInput("");
    }
  }

  return (
    <div className={style.search}>
      <div>
        <input
          type="text"
          placeholder="Search Dog..."
          onChange={handleInputChange}
          value={input}
          className={style.search}
        />
        <button className={style.btn} type="submit" onClick={(e) => { handleSubmit(e) }}>
          Search
        </button>
      </div>
    </div>
  );
}
