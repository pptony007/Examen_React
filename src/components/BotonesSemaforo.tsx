import React from 'react'
import { useSemaforo } from '../context/SemaforoContext'

export default function BotonesSemaforo() {
  const { setColor } = useSemaforo()
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
      <button onClick={() => setColor('rojo')}>Rojo</button>
      <button onClick={() => setColor('amarillo')}>Amarillo</button>
      <button onClick={() => setColor('verde')}>Verde</button>
    </div>
  )
}
