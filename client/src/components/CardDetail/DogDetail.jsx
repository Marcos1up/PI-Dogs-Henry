import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../NavBar/NavBar";
import styles from "./CardDetail.module.css";

import dog404 from "../../Assets/photo404Dogs.jpg";
import { getDogById } from "../../redux/actions";

export default function DogDetail(props) {
  const dogId = useSelector((state) => state.perritoId);
  let aux = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogById(aux));
  }, [dispatch, aux]);

  return (
    <div className={styles.detail}>
      <Nav />
      <div>
        {dogId ? (
          <div className={styles.detail2}>
            <div>
              <img
                src={dogId.image ? dogId.image : dog404}
                alt="Not found"
                width={400}
              />
            </div>
            <div>
              <h4>Name: "{dogId.name}"</h4>
              <p>
                Weight: {dogId.weight_min} Kg. min. ~ {dogId.weight_max} Kg. max.
              </p>
              <p>
                Height: {dogId.height_min} Cm. min. ~ {dogId.height_max} Cm. max.
              </p>
              <p>
                Life Span: {dogId.life_span ? dogId.life_span : `${dogId.lifeSpan} Years`}
              </p>
              <p>
                Temperaments:{" "}
                {!dogId.createdAt
                  ? dogId.temperament
                  : dogId.temperaments.map((e) => e.name).join(", ")}
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
