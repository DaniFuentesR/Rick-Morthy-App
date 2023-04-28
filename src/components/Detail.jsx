import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {

    const {id} = useParams(); 
    let [character, setCharacter] = useState({}); 
    
useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
     }, [id]);

    return (

        <div>
        
        { (character.name) ? <h1>{character.name}</h1> : "..." }
        { (character.status) ? <p>STATUS | {character.status}</p> : "..." }
        { (character.species) ? <p>SPECIE | {character.species}</p> : "..." }
        { (character.gender) ? <p>GENDER | {character.gender}</p> : "..." }
        { (character.origin) ? <p>ORIGIN | {character.origin.name}</p> : "..." }
        { (character.image) ?   <img src={character.image} alt="Character" /> : "..." }

        </div>

    )     

}

export default Detail; 