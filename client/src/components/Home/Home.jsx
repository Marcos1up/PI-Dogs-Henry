import React from "react";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../../redux/actions";
import CardDog from "../Card/CardDog";
import Nav from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import SortByName from "../Sorts/SortByName";

export default function Home() {
  const dispatch = useDispatch();

  let handleReload = (e) => {
    e.preventDefault();
    dispatch(getAllDogs());
  };
  return (
    <div>
      <Nav />
      <SearchBar />
      <div>
        <button
          onClick={(e) => {
            handleReload(e);
          }}
        >
          Reload Dogs
        </button>
        <SortByName />
      </div>
      <div>
        <CardDog />
      </div>
    </div>
  );
}
