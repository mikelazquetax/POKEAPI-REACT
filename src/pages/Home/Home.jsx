import React, { useState, useEffect } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { useLight } from "../../components/LightHook";
import { renderMatches } from "react-router-dom";


export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState('')
  let [cards, printCards] = useState([]);
  const lights = useLight();
  const styles = {
    backgroundColor: lights.light ? "black" : "white",
  };
  

  /*  const getAll = async () =>{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await res.json()


  const pokemon = (result) =>{
    result.forEach(async(poke) =>{
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      const data = await res.json()
      cards.push(data)

      printCards(cards)
     
    })
  }
  pokemon(data.results)
console.log(cards)

  }

  useEffect(()=>{
    getAll()
  }) */
  useEffect(() => {
   let pokemons = []
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((data) => data.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          pokemons = result.results
          console.log(filter)
          filter.toLocaleLowerCase()
          
            
            var filtrador = pokemons.filter((pokemon)=>{
              return pokemon.name.includes(filter)
            })
            if (filtrador !== null){
              
              printCards(filtrador)
              
            }else{
              printCards(result.results);
            }

          
     
          

        },
        (error) => {
          
          setIsLoaded(true);
          
          setError(error);
        }
      );
  }, [filter]);

  const onChange = (e) =>{
   
    console.log(e.target.value)
    setFilter(e.target.value)
 

  }
  

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div style={styles}>
        <div className="header">
        <input placeholder="search pokemon" onChange={onChange}/>
        <h2 className="title">Pokemon</h2>
        <button onClick={lights.switchLight}>Dark Mode</button>
        </div>
        

        <div className="allCards">


          { 
 
            cards.map((pokemon, index) => {
            return (
              <div key={index} className="singleCard">
                <PokeCard name={pokemon.name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
