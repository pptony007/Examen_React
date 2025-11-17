import React, { createContext, useContext, useState, ReactNode } from 'react'

type Color = 'rojo' | 'amarillo' | 'verde'

interface SemaforoContextValue {
  color: Color
  setColor: (c: Color) => void
}

const SemaforoContext = createContext<SemaforoContextValue | undefined>(undefined)

export function SemaforoProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState<Color>('rojo')
  return (
    <SemaforoContext.Provider value={{ color, setColor }}>
      {children}
    </SemaforoContext.Provider>
  )
}

export function useSemaforo() {
  const ctx = useContext(SemaforoContext)
  if (!ctx) throw new Error('useSemaforo must be used within SemaforoProvider')
  return ctx
}
