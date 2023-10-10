import React, { useState } from "react";

export default (props) => {
  const { initialTitle, initialDescription, initialPrice, onSubmitProp } =
    props;

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, description });
    setTitle("");
    setPrice(0);
    setDescription("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
      <input type="submit" value="Save" />
    </form>
  );
};
