import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const pokemonList = pokemon.map(p => <PokemonCard key={p.id} poke={p}></PokemonCard>)
  return (
    <Card.Group itemsPerRow={6}>
      {
        pokemonList
      }
    </Card.Group>
  );
}

export default PokemonCollection;
