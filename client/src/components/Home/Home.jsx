import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTemperament,
  getAllDogs,
  getTemperaments,
  orderWeigth,
  sortByName,
} from "../../redux/actions";
import styles from "../Home/Home.module.css";

import CardDog from "../Card/CardDog";
import Nav from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  const dispatch = useDispatch();

  const allTemperaments = useSelector((state) => state.temperaments);
  const [order, setOrder] = useState("");

  const [weigth, setWeigth] = useState();
  const [asc, setAsc] = useState();

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleOrdChange(e) {
    //ordenar por alfabeto
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setAsc(e.target.value);
  }

  function handleOrdChangeWeigth(e) {
    //ordenar por peso
    e.preventDefault();
    dispatch(orderWeigth(e.target.value));
    setWeigth(e.target.value);
  }

  function handleFilterTemperament(e) {
    //filtrar por temperamento
    e.preventDefault();
    dispatch(filterTemperament(e.target.value));
    setOrder(e.target.value);
  }

  let handleReload = (e) => {
    e.preventDefault();
    dispatch(getAllDogs());
  };

  return (
    <div id={styles.showcase}>
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
        <div>
          <p>Filter by temperament: </p>
          <div>
            <select value={order} onChange={(e) => handleFilterTemperament(e)}>
              <option value="temperament">Disable</option>
              {allTemperaments.map((element) => (
                <option value={element.name} key={element.id}>
                  {element.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div>
        <h1>Henry's Dogs</h1>
        <CardDog />
      </div>
    </div>
  );
}
