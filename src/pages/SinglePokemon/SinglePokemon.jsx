import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function SinglePokemon() {
  const [error, setError ] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokeInfo, setPokeInfo] = useState({
    id: "",
    name:"",
    sprites:  {},
    types: []
  })

  const { pname } = useParams()

/////////////////////////////////Alternativa 1/////////////////////////////////////////////////////
  useEffect(()=>{
    let loaded = true
    fetch(`https://pokeapi.co/api/v2/pokemon/${pname}`)
    .then(data => data.json())
    .then((resultado)=>{
        setIsLoaded(true);
      console.log(resultado)
      if(loaded)
      setPokeInfo(resultado)
    },(error) =>{
      console.log('error')
 
    })

},[])   //Porque si pones [] no se carga todo el rato la api?

//////////////////////////////////Alternativa 2: con async await///////////////////
/*   const getDetail = async () =>{
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pname}`)
  const data = await res.json()
  console.log(data)
  setIsLoaded(true);
 setPokeInfo(data)
}

useEffect(()=>{
  getDetail()
},[])
  */
 
/////////////////////////////////////////////////////////////////////////////////////

if(error){
  return <div>Error: {error.message}</div>
}else if(!isLoaded || pokeInfo.id === ''){
  return <div>Cargando...</div>
} else{
  return (
    <div className="card">
     <img className="image" src ={pokeInfo.sprites.other.dream_world.front_default} alt=""  /> 
      <h2 className="id">{pokeInfo.id}</h2>
      <h3 className="title">{pokeInfo.name.toUpperCase()}</h3>    
     {pokeInfo.types.map((type, index ) =>{
       return <p className="types" key={index}>{type.type.name.toUpperCase()}</p>
     })}   
  
    </div>
  )
}
}