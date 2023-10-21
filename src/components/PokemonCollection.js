import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, search }) {

  const pokemonsToDisplay = pokemons.filter(pokemon => search === '' || pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {pokemonsToDisplay.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
