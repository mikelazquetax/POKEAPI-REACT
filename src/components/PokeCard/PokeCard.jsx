import React from "react";
import { Link } from "react-router-dom";


export default function PokeCard({ name, id }) {
  return (
    <Link to={`/SinglePokemon/${name}`}>
    <div >
  
        
          <p>{id}</p>
          <p>{name.toUpperCase()}</p>
          
    
      </div>
    </Link>
  );
}
