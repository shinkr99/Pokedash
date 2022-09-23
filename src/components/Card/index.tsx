import React from 'react'

import CardBase from "react-bootstrap/Card"

import { Pokemon } from "../../types"

type CardProps = {
  pokemon: Pokemon
  onClick?: (id: number) => void
}

const Card: React.FC<CardProps> = ({ pokemon, onClick }) => {

  const handleClick = () => {
    if (onClick != null) {
      onClick(pokemon.id)
    }
  }

  return (
    <CardBase onClick={handleClick}>
      <CardBase.Img variant="top" src={pokemon.sprites.front_default} />
      <CardBase.Body>
        <CardBase.Title>{pokemon.name}</CardBase.Title>
      </CardBase.Body>
    </CardBase>
  )
}

export default Card