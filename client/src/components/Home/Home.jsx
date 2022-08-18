import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardDog from "../Card/CardDog";

export default function Home() {
  

  return (
    <div>
      <h1>hola soy el llamado principal</h1>
      <CardDog />
    </div>
  );
}

/* 

name={el.name}
weight={el.weight?.metric}
temperament={el.temperament}
image={el.image?.url}
createdByDB={el.createdByDB}



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
