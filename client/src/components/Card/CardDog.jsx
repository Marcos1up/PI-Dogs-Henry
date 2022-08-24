import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs } from "../../redux/actions";

export default function CardDog() {
  const dogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const dog404 =
    "https://st2.depositphotos.com/1229718/8159/i/950/depositphotos_81597492-stock-photo-404-error.jpg";

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div>
      {dogs &&
        dogs.map((e) => {
          return (
            <div key={e.id}>
              <img src={e.image} alt={dog404} width={400}></img>
              <h1>Name: {e.name} </h1>
              <h3>Id: {e.id}</h3>
              <h3>
                Temperament: <br /> {e.temperament}
              </h3>
              <h4>
                Weight:{" "}
                {e.weight_min && e.weight_max
                  ? e.weight_min + " - " + e.weight_max
                  : "Unregistered weight"}
              </h4>
              <Link to={`/home/${e.id}`}> {e.name} </Link>
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

id: e.id,
name: e.name,
image: e.image.url ? e.image.url : dog404, 
breed_group: e.breed_group,
temperament: e.temperament ? e.temperament : "Dog without temperament",
life_span: e.life_span,
weight_min: parseInt(e.weight.metric.slice(0, 2).trim()),
weight_max: parseInt(e.weight.metric.slice(4).trim()),
height_min: parseInt(e.height.metric.slice(0, 2).trim()),
height_max: parseInt(e.height.metric.slice(4).trim()),

*/
