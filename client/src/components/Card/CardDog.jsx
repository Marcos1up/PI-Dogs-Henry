import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import styles from "./Card.module.css";

export default function CardDog() {
  const dogs = useSelector((state) => state.dogs);

  const dispatch = useDispatch();

  //const del paginado
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  const indexOfLast = currentPage * dogsPerPage;
  const IndesOfFirst = indexOfLast - dogsPerPage;
  const currentDogs = dogs.slice(IndesOfFirst, indexOfLast);

  const dog404 =
    "https://st2.depositphotos.com/1229718/8159/i/950/depositphotos_81597492-stock-photo-404-error.jpg";


  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);



  console.log((IndesOfFirst, indexOfLast))
  return (
    <div>
      <Pagination
        dogsPerPage={dogsPerPage}
        dogs={dogs.length}
        paginate={paginate}
      />
      {currentDogs &&
        currentDogs.map((e) => {
          return (
            <div className={styles.detail2} key={e.id}>
              <img src={e.image ? e.image : dog404} alt="Doggy not found" width={400}></img>
              <h1>Name: {e.name} </h1>
              <h3>Id: {e.id}</h3>
              <h3>
                Temperament: {" "}
                {!e.createdAt
                  ? e.temperament
                  : e.temperaments.map((e) => e.name).join(", ")}
              </h3>
              <h4>
                Weight:{" "}
                {e.weight_min && e.weight_max
                  ? e.weight_min + " Kg. min - " + e.weight_max + " Kg. max."
                  : "Unregistered weight"}
              </h4>
              <Link to={`/home/${e.id}`}> {e.name} </Link>
            </div>
          );
        })}
      <Pagination
        dogsPerPage={dogsPerPage}
        dogs={dogs.length}
        paginate={paginate}
      />
    </div>
  );
}

/* 
key: e.id,
id: e.id,
image: e.image,
name: e.name,
temperamento: e.temperament,
peso: e.weight_max,  
*/
