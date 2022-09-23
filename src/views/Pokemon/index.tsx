import { useCallback, useEffect, useState } from 'react';
import { Container, Placeholder } from 'react-bootstrap'
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import api from '../../services/api';
// import { AppState } from '../../store';
import { Pokemon as PokemonType } from '../../types';

import './styles.scss'

function Pokemon() {
  const [pokemonData, setPokemonData] = useState<PokemonType>()
  // const data = useSelector<AppState>((state) => state.pokemons) as Array<PokemonType>

  const { id } = useParams()

  // useEffect(() => {
  //   if (id) {
  //     setPokemonData(data.find((pok) => pok.id === parseInt(id, 10)))
  //   }
  // }, [id, data, setPokemonData])

  const fetchPokemon = useCallback(async () => {
    const response = await api.get(`/pokemon/${id}`).then((res) => {
      return res.data
    })

    setPokemonData(response)
  }, [setPokemonData, id]);

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

export default Pokemon;