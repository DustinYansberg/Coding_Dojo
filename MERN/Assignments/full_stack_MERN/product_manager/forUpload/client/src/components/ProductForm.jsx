import React, { useState } from "react";
import axios from "axios";

export default () => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new product
    const postReq = {
      title: title,
      description: description,
      price: price,
    };
    axios
      .post("http://localhost:8000/api/products", postReq)
      .then(
        (res) => console.log(res),
        setTitle(""),
        setPrice(0),
        setDescription("")
      )
      .catch((err) => console.log(err));
  };
  //onChange to update firstName and lastName
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </p>
      <p>
        <label>Price</label>
        <br />
        <input
          type="number"
          /*
           * The -webkit- and -moz- give issues to this. move it to a cssmodule or styledcomponent?
           * style={{ -webkit-appearance: "none", -moz-appearance:"textfield"}}
           */
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </p>
      <input type="submit" value="Add Product to DB" />
    </form>
  );
};
