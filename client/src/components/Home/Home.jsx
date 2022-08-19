import React /* { useEffect } */ from "react";
//import { useDispatch, useSelector } from "react-redux";
import CardDog from "../Card/CardDog";
import Nav from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  return (
    <div>
      <Nav />
      <SearchBar />
      <div>
        <h1>LLAMADO GENERAL DE PERROS</h1>
        <div>
          <CardDog />
        </div>
      </div>
    </div>
  );
}
