import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/actions";

export default function CardDog() {
  const dogs = useSelector((state) => state.dogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);
  return (
    <div>
      {dogs &&
        dogs.map((e) => {
          return (
            <div key={e.id}>
              <img src={e.image} alt={"Img not found"}></img>
              <h1>name: {e.name} </h1>
              <h2>id: {e.id}</h2>
              <br></br>
              <p>
                temperament:
                {e.temperament}
              </p>
              <h4>
                weight: {e.weight_min} - {e.weight_max}
              </h4>
            </div>
          );
        })}
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
