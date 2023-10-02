import { useState } from "react";

const PokeDisplay = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0)
  

  const createPokemonList = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setOffset(offset + 10)
        setPokemonList(response.results);
        console.log(offset)
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
