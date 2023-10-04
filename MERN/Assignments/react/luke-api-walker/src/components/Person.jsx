import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Person = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [homePlanet, setHomePlanet] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        if (response.status != 200) {
          navigate(`/error`);
        }
        return response.json();
      })
      .then((response) => {
        // fetch home world
        fetch(response.homeworld)
          .then((response) => {
            if (response.status != 200) {
              navigate(`/error`);
            }
            return response.json();
          })
          .then((response) => {
            // route to the sliced url
            setUrl(response.url.slice(response.url.indexOf("planets")));
            setHomePlanet(response);
          })
          .catch((err) => {
            console.log(err);
          });
        setPerson(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/people/${id}`).then((response) => {
  //     setPerson(response.data)
  //   }).catch(err=>{
  //     console.log(err)
  //     navigate('/error')
  //   });
  // }, [id]);

  

  return (
    <div>
      {person ? (
        <>
          <h1>{person.name}</h1>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Hair Color: {person.hair_color}</p>
          <p>Skin Color: {person.skin_color}</p>
          <p>
            Home Planet: <Link to={`/${url}`}>{homePlanet.name}</Link>
          </p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Person;
