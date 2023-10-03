import { useParams} from "react-router-dom";

const Num = () => {
  const { num } = useParams();

  if (isNaN(num)) {
    return <p>The word is: {num} </p>;
  } else {
    return <p>The number is: {num}</p>;
  }
};

export default Num;
