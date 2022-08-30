import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDog, getTemperaments } from "../../redux/actions";
import Nav from "../NavBar/NavBar";
import "./Create.css"

function validation(input) {
  let errors = {};

  if (!input.name || input.name.length <= 1) {
    errors.name = "Name of the dog is required";
  } else if (!isNaN(input.name)) {
    errors.name = "Name of the dog must be in letters"
  }

  if (!input.weight_max) {
    errors.weight_max = "Max weight of the dog is required"
  } else if (isNaN(parseInt(input.weight_max))) {
    errors.weight_max = "Max weight of a dog must be a number"
  } else if (input.weight_max >= 100) {
    errors.weight_max = "your dog must not exceed 100 kg"
  } else if (input.weight_max <= 0) {
    errors.weight_max = "Your dog cant be less than 0 Kg"
  } else if (input.weight_max < input.weight_min) {
    errors.weight_max = "Must be greater than value min"
  }

  if (!input.weight_min) {
    errors.weight_min = "Min weight of the dog is required";
  } else if (isNaN(parseInt(input.weight_min))) {
    errors.weight_min = "Max weight of a dog must be a number"
  } else if (input.weight_min <= 0) {
    errors.weight_min = "Your dog cant be less than 0 Kg"
  } else if (input.weight_min > input.weight_max) {
    errors.weight_min = "Min weight cant be greater than Max weight"
  }

  if (!input.height_max) {
    errors.height_max = "Max height of the dog is required";
  } else if (isNaN(parseInt(input.height_max))) {
    errors.height_max = "Max height of the dog must be a number"
  } else if (input.height_max > 200) {
    errors.height_max = "Your dog cant be taller than 2 meters"
  } else if (input.height_max <= 0) {
    errors.height_max = "Your dog cant be less than 0 Cm"
  } else if (input.height_max < input.height_min) {
    errors.height_max = "Must be greater than value min"
  }

  if (!input.height_min) {
    errors.height_min = "Min height of the dog is required";
  } else if (isNaN(parseInt(input.height_min))) {
    errors.height_min = "Min height of the dog must be a number"
  } else if (input.height_min <= 0) {
    errors.height_min = "Your dog cant be less than 0 Cm"
  } else if (input.height_max < input.height_min) {
    errors.height_min = "Min height cant be greater than Max height"
  }

  if (!input.lifeSpan_max) {
    errors.lifeSpan_max = "The Max life expectancy of the dog is required";
  } else if (isNaN(parseInt(input.lifeSpan_max))) {
    errors.lifeSpan_max = "The life expectancy of the dog must be a number"
  } else if (input.lifeSpan_max <= 0) {
    errors.lifeSpan_max = "The Max life expectancy of the dog cannot be less than 0"
  } else if (input.lifeSpan_max < input.lifeSpan_min) {
    errors.lifeSpan_max = "Must be greater than value min"
  }

  if (!input.lifeSpan_min) {
    errors.lifeSpan_min = "The Min life expectancy of the dog is required";
  } else if (isNaN(parseInt(input.lifeSpan_min))) {
    errors.lifeSpan_min = "The life expectancy of the dog must be a number"
  } else if (input.lifeSpan_min <= 0) {
    errors.lifeSpan_min = "The Min life expectancy of the dog cannot be less than 0"
  } else if (input.lifeSpan_min > input.lifeSpan_max) {
    errors.lifeSpan_min = "The Min life expectancy cant be greater than Max height"
  }

  /* if (input.temperament.length < 1) {
    errors.temperament = "Temperaments of the dog is required";
  } */

  return errors;
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
    lifeSpan_max: "",
    lifeSpan_min: "",
    temperament: [],
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  //==============================================================================

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("Please may you fill the form correctly")
    } else if (
      input.name !== "" &&
      input.weight_min !== "" &&
      input.height_max !== "" &&
      input.weight_min !== "" &&
      input.weight_max !== "" &&
      input.lifeSpan !== "" &&
      input.temperament.length !== 0
    ) {
      dispatch(createDog(input));
      setInput({
        name: "",
        image: "",
        weight_max: "",
        weight_min: "",
        height_max: "",
        height_min: "",
        lifeSpan_max: "",
        lifeSpan_min: "",
        temperament: [],
      })
      alert("your dog was successfully created")
    } else {
      alert("Error. Something went wrong! Please verify that the information is correct")
    }
  }

  function handleInputChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(validation({
      ...input,
      [e.target.name]: e.target.value,
    }))
  }

  //==============================================================================

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
    <div className="back">
      <Nav />
      <h1 className="tittle">Create your dog!</h1>
      <form onSubmit={(e) => handleSubmit(e)} id="form">
        <div className="createdog">
          <div>
            <label className="createdog">Name of the dog: </label>
            <input type="text" value={input.name} name="name" className="dots" onChange={e => handleInputChange(e)} />
            {errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="createdog">You can upload an image! </label>
            <input type="text" value={input.image} name="image" className="dots" placeholder="(URL)" onChange={e => handleInputChange(e)} />
            {errors.image && (
              <p className="error">{errors.image}</p>
            )}
          </div>
          <div>
            <label className="createdog">Max Weight in Kg: </label>
            <input type="number" value={input.weight_max} name="weight_max" className="dots" onChange={e => handleInputChange(e)} />
            {errors.weight_max && (
              <p className="error">{errors.weight_max}</p>
            )}
          </div>
          <div>
            <label className="createdog">Min Weight in Kg: </label>
            <input type="number" value={input.weight_min} name="weight_min" className="dots" onChange={e => handleInputChange(e)} />
            {errors.weight_min && (
              <p className="error">{errors.weight_min}</p>
            )}
          </div>
          <div>
            <label className="createdog">Max Height in Cm: </label>
            <input type="number" value={input.height_max} name="height_max" className="dots" onChange={e => handleInputChange(e)} />
            {errors.height_max && (
              <p className="error">{errors.height_max}</p>
            )}
          </div>
          <div>
            <label className="createdog">Min Height in Cm: </label>
            <input type="number" value={input.height_min} name="height_min" className="dots" onChange={e => handleInputChange(e)} />
            {errors.height_min && (
              <p className="error">{errors.height_min}</p>
            )}
          </div>
          <div>
            <label className="createdog">Max life expectancy: </label>
            <input type="number" value={input.lifeSpan_max} name="lifeSpan_max" className="dots" onChange={e => handleInputChange(e)} />
            {errors.lifeSpan_max && (
              <p className="error">{errors.lifeSpan_max}</p>
            )}
          </div>
          <div>
            <label className="createdog">Min life expectancy: </label>
            <input type="number" value={input.lifeSpan_min} name="lifeSpan_min" className="dots" onChange={e => handleInputChange(e)} />
            {errors.lifeSpan_min && (
              <p className="error">{errors.lifeSpan_min}</p>
            )}
          </div>
          <div>

            <select
              className="createdog"
              onChange={(e) => handleSelect(e)}
              id="temp"
            >
              <option value="selected" className="createdog">
                Select temperaments
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
              <div key={element}>
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
            {errors.temperament && (
              <p className="error">{errors.temperament}</p>
            )}
          </div>
        </div>
        <br />
        <div>
          <Link to="/home">
            <button className="lettersB">Back to Home</button>
          </Link>
          <button type="submit" className="lettersB">Create my Dog!</button>
        </div>
      </form>
    </div>
  );
}
