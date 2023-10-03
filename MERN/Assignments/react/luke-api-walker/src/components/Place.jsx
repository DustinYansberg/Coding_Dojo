import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const Place = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((response) => {
        if (response.status != 200) {
          navigate(`/error`);
        }
        return response.json();
      })
      .then((response) => setPlanet(response))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      {planet ? (
        <>
          <h1>{planet.name}</h1>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Surface Water: {planet.surface_water > 0 ? "Yes" : "No"}</p>
          <p>Population: {planet.population}</p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Place;
