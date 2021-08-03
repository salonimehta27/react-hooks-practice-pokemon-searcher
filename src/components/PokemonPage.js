import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [])

  const searches = pokemon.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function addNewPokemon(newPoke) {
    setPokemon([...pokemon, newPoke])
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAdd={addNewPokemon} />
      <br />
      <Search onSearch={handleSearch} />
      <br />
      <PokemonCollection pokemon={searches} />
    </Container>
  );
}

export default PokemonPage;
