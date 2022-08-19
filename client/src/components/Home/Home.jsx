import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardDog from "../Card/CardDog";
import Nav from "../NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Searchbar /> */}
      <div>
        <h1>LLAMADO GENERAL DE PERROS</h1>
        <div>
          <CardDog />
        </div>
      </div>
    </div>
  );
}
