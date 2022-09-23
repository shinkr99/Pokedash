import { useCallback, useEffect, useState } from 'react';
import { Container, Placeholder } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import api from '../../services/api';
import { Pokemon as PokemonType } from '../../types';

import './styles.scss'

function Search() {
  const [pokemonData, setPokemonData] = useState<PokemonType>()

  const { term } = useParams()

  const fetchPokemon = useCallback(async () => {
    const response = await api.get(`/pokemon/${term}`).then((res) => {
      return res.data
    })

    setPokemonData(response)
  }, [setPokemonData, term]);

  useEffect(() => {
    fetchPokemon()
  }, [fetchPokemon])

  return (
    <>
      <Header />
      <Container fluid="lg" className='pokemon'>
        <h1>{pokemonData?.name}</h1>
        <img src={pokemonData?.sprites.front_default} />
      </Container>
    </>
  )
}

export default Search;