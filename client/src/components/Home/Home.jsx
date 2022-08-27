import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTemperament,
  getAllDogs,
  getTemperaments,
  orderByCreation,
  orderWeigth,
  sortByName,
} from "../../redux/actions";
import style from "../Home/Home.module.css";

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

  function handleOrderByCreation(e) {
    //filtro por creados y DB
    e.preventDefault();
    dispatch(orderByCreation(e.target.value));
    setOrder(e.target.value);
  }

  let handleReload = (e) => {
    //reload
    e.preventDefault();
    dispatch(getAllDogs());
  };

  return (
    <div className={style.body}>
      <Nav />
      <SearchBar />
      <div className={style.filters}>
        <div>
          <div>
          <p>Reload dogs: </p>
            <button onClick={(e) => handleReload(e)}>Reload</button>
          </div>
        </div>
        <div>
          <div value={asc}>
          <p>Sort by Name: </p>
            <select onChange={(e) => handleOrdChange(e)}>
              <option value="none" key="none">
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
          <div value={weigth}>
          <p>Sort by Weight: </p>
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
          <div>
          <p>Filter by temperament: </p>
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
        <div>
          <div>
          <p>Filter by types dogs: </p>
            <select
              onChange={(e) => handleOrderByCreation(e)}
              className="filter"
            >
              <option value="all" defaultValue="all">
                All Dogs
              </option>
              <option value="api">DogsFromApi</option>
              <option value="mydogs">DogsFromDb</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Henry's Dogs</h1>
          <h4>by Marcos Soria</h4>
        </div>
        <div>
          <CardDog />
        </div>
      </div>
    </div>
  );
}
