import { useCallback, useEffect, useMemo, useState } from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'

import api from '../../services/api'
import { Pokemon, PokemonResult } from '../../types'
import Header from '../../components/Header'
import Card from '../../components/Card'
// import { AppState, setPokemons } from '../../store'

function Home() {
  const [data, setData] = useState<Array<Pokemon>>([])
  const navigate = useNavigate()
  // const data = useSelector<AppState>((state) => state.pokemons) as Array<Pokemon>
  // const dispatch = useDispatch()

  const pokemonGroups = useMemo<Array<Array<Pokemon>> | []>(() => {

    return data.reduce((dataSlice, item, index) => {
      const chunkIndex = Math.floor(index / 3)

      if (!dataSlice[chunkIndex]) {
        (dataSlice[chunkIndex] as Array<never>) = []
      }

      (dataSlice[chunkIndex] as Array<Pokemon>).push(item)

      return dataSlice
    }, [])
  }, [data]);

  const fetchPokemons = useCallback(async () => {
    const response = await api.get('/pokemon?limit=12').then((res) => {
      return res.data.results
    })

    const promisesGetDetails = response.map(async (pokemon: PokemonResult) => {
      return api.get(`/pokemon/${pokemon.name}`).then((res) => {
        return res.data
      })
    })

    const results = await Promise.all(promisesGetDetails)

    // dispatch(setPokemons(results))
    setData(results)
  }, [setData]);

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  const handleNavigate = (id: number) => navigate(`/pokemon/${id}`)

  return (
    <>
      <Header />
      <Container fluid="lg">
        {pokemonGroups.map((group: Array<Pokemon>, index) => (
          <CardGroup key={index} className="mb-3">
            {group.map((pokemon: Pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} onClick={handleNavigate} />
            ))}
          </CardGroup>
        ))}
      </Container>
    </>
  )
}

export default Home
