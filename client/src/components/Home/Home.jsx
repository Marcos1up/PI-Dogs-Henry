import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs, orderWeigth, sortByName } from "../../redux/actions";
import CardDog from "../Card/CardDog";
import Nav from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
//import SortByName from "../Sorts/SortByName";

export default function Home() {
  const dispatch = useDispatch();

  const [weigth, setWeigth] = useState("");
  const [asc, setAsc] = useState();

  function handleOrdChange(e) {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setAsc(e.target.value);
  }

  function handleOrdChangeWeigth(e) {
    e.preventDefault();
    dispatch(orderWeigth(e.target.value));
    setWeigth(e.target.value);
  }

  let handleReload = (e) => {
    e.preventDefault();
    dispatch(getAllDogs());
  };

  return (
    <div>
      <Nav />
      <SearchBar />
      <div>
        <div>
          <p>Sort by Name: </p>
          <div value={asc}>
            <select onChange={(e) => handleOrdChange(e)}>
              <option
                value="none"
                key="none"
                onClick={(e) => {
                  handleReload(e);
                }}
              >
                Disable
              </option>
              <option value="asc" key="asc">
                A - Z
              </option>
              <option value="desc" key="desc">
                Z - A
              </option>
            </select>
          </div>
        </div>
        <div>
          <p>Sort by Weight: </p>
          <div value={weigth}>
            <select onChange={(e) => handleOrdChangeWeigth(e)}>
              <option value="none" key="none">
                Disable
              </option>
              <option value="asc" key="asc">
                Asc
              </option>
              <option value="desc" key="desc">
                Des
              </option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <CardDog />
      </div>
    </div>
  );
}
