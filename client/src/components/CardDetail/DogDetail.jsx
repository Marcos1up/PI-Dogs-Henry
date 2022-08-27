import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";
import Nav from "../NavBar/NavBar";
import style from './dogDetail.module.css';

import dog404 from "../../Assets/photo404Dogs.jpg"

export default function DogDetail(props) {
  const dogId = useSelector((state) => state.perritoId);
  let aux = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogById(aux));
  }, [dispatch, aux]);

  console.log(aux)
  console.log(dogId)
  return (
    <div>
      <Nav />
      <div className={style.card}>
        {dogId ? (
          <div>
            <div>
              <img src={dogId.image ? dogId.image : dog404} alt="Not found" width={400} />
            </div>
            <div ClassName={style.content}>
              <h4>Name: "{dogId.name}"</h4>
              <h4>Breed: {dogId.breed_group}</h4>
              <p>
                Weight: {dogId.weight_min} Kg. min ~ {dogId.weight_max} Kg. max.
              </p>
              <p>
                Height: {dogId.height_min} Cm. min ~ {dogId.height_max} Cm. max.
              </p>
              <p>Life Span: {dogId.life_span}</p>
              <p>
                Temperaments:{" "}
                {!dogId.createdAt
                  ? dogId.temperament
                  : dogId.Temperaments[0].name}
              </p>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}
