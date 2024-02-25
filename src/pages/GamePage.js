import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';

export function GamePage() {
  const { id } = useParams()
  return (
    <>
    <h1>Game {id}</h1>
    </>
  )
}
