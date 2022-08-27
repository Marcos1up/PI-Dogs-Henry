import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";
import Nav from "../NavBar/NavBar";

import dog404 from "../../Assets/photo404Dogs.jpg"

export default function DogDetail(props) {
  const dogId = useSelector((state) => state.perritoId);
  let aux = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogById(aux));
  }, [dispatch, aux]);

  return (
    <div>
      <Nav />
      <div>
        {dogId ? (
          <div>
            <div>
              <img src={dogId.image ? dogId.image : dog404} alt="Not found" width={400} />
            </div>
            <div>
              <h4>Name: "{dogId.name}"</h4>
              <h4>Breed: {dogId.breed_group ? dogId.breed_group : "Undefined Breed"}</h4>
              <p>
                Weight: {dogId.weight_min} Kg. min ~ {dogId.weight_max} Kg. max.
              </p>
              <p>
                Height: {dogId.height_min} Cm. min ~ {dogId.height_max} Cm. max.
              </p>
              <p>Life Span: {dogId.life_span ? dogId.life_span : dogId.lifeSpan}</p>
              <p>
                Temperaments:{" "}
                {!dogId.createdAt
                  ? dogId.temperament
                  : dogId.temperaments.map(e => e.name).join(", ")}
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
