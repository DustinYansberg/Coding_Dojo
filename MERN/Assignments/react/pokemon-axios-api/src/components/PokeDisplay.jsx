import { useState } from "react";
import axios from "axios";

const PokeDisplay = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  const createPokemonList = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then((response) => {
        setOffset(offset + 10);
        return setPokemonList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      PokeDisplay
      <button onClick={createPokemonList}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default PokeDisplay;
