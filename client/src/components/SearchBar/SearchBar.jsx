import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/actions";

export default function SearchBar() {
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
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          value={input}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}
