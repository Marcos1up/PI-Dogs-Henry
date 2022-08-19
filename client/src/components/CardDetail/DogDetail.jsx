import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";
import Nav from "../NavBar/NavBar";

export default function DogDetail(props) {
  const dogId = useSelector((state) => state.perritoId);
  const dog404 =
    "https://st2.depositphotos.com/1229718/8159/i/950/depositphotos_81597492-stock-photo-404-error.jpg";

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
              <img src={dogId.image} width={400} alt={dog404} />
            </div>
            <div>
              <h4>Name: "{dogId.name}"</h4>
              <p>
                Weight: {dogId.weight_min} min ~ {dogId.weight_max} max Kg.
              </p>
              <p>
                Height: {dogId.height_min} min ~ {dogId.height_max} max Cm.
              </p>
              <p>Life Span: {dogId.life_span}</p>
              <p>
                Temperaments: {
                !dogId.createdAt
                  ? dogId.temperament
                  : dogId.Temperaments[0].name
                  }
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
