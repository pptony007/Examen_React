import React from 'react'
import { SemaforoProvider } from './context/SemaforoContext'
import LucesSemaforo from './components/LucesSemaforo'
import BotonesSemaforo from './components/BotonesSemaforo'

export default function App() {
  return (
    <SemaforoProvider>
      <div style={{display: 'flex', gap: 24, alignItems: 'flex-start', padding: 24}}>
        <LucesSemaforo />
        <BotonesSemaforo />
      </div>
    </SemaforoProvider>
  )
}
