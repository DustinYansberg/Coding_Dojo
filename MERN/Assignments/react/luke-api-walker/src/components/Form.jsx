import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const searchObject = { category: e.target[0].value, id: e.target[1].value };
    // Use state for form inputs
    navigate(`/${searchObject.category}/${searchObject.id}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <select name="type" id="">
        <option value="people">people</option>
        <option value="planets">planets</option>
      </select>
      <input type="number" name="id" id="id" />
      <input type="submit" value="Go!" />
    </form>
  );
};

export default Form;
