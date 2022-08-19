import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";
import Nav from "../NavBar/NavBar";

export default function DogDetail(props) {
  const dogId = useSelector((state) => state.perritoId[0]);

  let aux = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogById(aux));
  }, [dispatch, aux]);

  return dogId ? (
    <div>
      <Nav />
      <div>
        <div>
          <img src={dogId.image} alt="Err img" />
        </div>
        <div>
          <h4>Name: "{dogId.name}"</h4>
          <p>
            Weight: {dogId.weight_min} min ~ {dogId.weight_max} max Kg.
          </p>
          <p>
            Height: {dogId.height.split(" - ")[0]} min ~
            {dogId.height.split(" - ")[1]} max Cm.
          </p>
          <p>Life Span: {dogId.life_span}</p>
          <p>
            Temperaments:
            {!dogId.createdAt ? dogId.temperament : dogId.Temperaments[0].name}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
