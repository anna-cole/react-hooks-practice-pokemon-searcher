import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  return (
    <>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6} onClick={() => console.log('hi')} >
        {pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
