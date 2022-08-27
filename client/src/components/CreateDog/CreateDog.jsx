import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTemperaments } from "../../redux/actions";

function validation(input) {
  let errors = {};
}

export default function CreateDog() {
  const dispatch = useDispatch();
  const allTemperament = useSelector((state) => state.temperaments);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    image: "",
    weight_max: "",
    weight_min: "",
    height_max: "",
    height_min: "",
    lifeSpan: "",
    temperament: [],
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    /* if (condition) {
    } else {
    } */
  }

  function handleSelect(e) {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  }
  function handleDelete(event) {
    setInput({
      ...input,
      temperament: input.temperament.filter((e) => e !== event),
    });
  }

  return (
    <div>
      <h1>Create ypur dog! mother fucker</h1>
      <form onSubmit={(e) => handleSubmit(e)} id="form">
        <div>
          <div>
            <label>The name of your dog is... </label>
            <input></input>
          </div>
          <div>
            <label>Upload an image for your Dog! (URL) </label>
            <input></input>
          </div>
          <div>
            <label>The Max Weight of your dog in Kg is... </label>
            <input></input>
          </div>
          <div>
            <label>The Min Weight of your dog in Kg is... </label>
            <input></input>
          </div>
          <div>
            <label>The Max Height of your dog in Cm is... </label>
            <input></input>
          </div>
          <div>
            <label>The Min Height of your dog in Cm is... </label>
            <input></input>
          </div>
          <div>
            <label>The life expectancy of your Dog is... </label>
            <input></input>
          </div>
          <div>
            <select
              className="createdog"
              onChange={(e) => handleSelect(e)}
              id="temp"
            >
              <option value="selected" className="createdog">
                Select temperaments for your dog
              </option>
              {allTemperament
                ?.sort(function (a, b) {
                  if (a.name < b.name) return -1;
                  if (a.name > b.name) return 1;
                  return 0;
                })
                .map((temp) => {
                  return (
                    <option className="dots" value={temp.name} key={temp.id}>
                      {temp.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            {input.temperament.map((element) => (
              <div>
                <h5>
                  {element}
                  <button
                    onClick={() => handleDelete(element)}
                    className="createdog"
                  >
                    X
                  </button>
                </h5>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Link to="/home">
            <button>Back</button>
          </Link>
          <button type="submit">Create my Dog</button>
        </div>
      </form>
    </div>
  );
}
