import React from 'react'
import { useSemaforo } from '../context/SemaforoContext'

function Luz({ activa, children }: { activa: boolean; children?: React.ReactNode }) {
  const style: React.CSSProperties = {
    width: 80,
    height: 80,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: activa ? '0 0 16px rgba(0,0,0,0.4)' : undefined,
    opacity: activa ? 1 : 0.25,
  }
  return <div style={style}>{children}</div>
}

export default function LucesSemaforo() {
  const { color } = useSemaforo()

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
      <Luz activa={color === 'rojo'}>
        <div
        data-testid="luz-rojo"
         style={{background: 'red', width: 64, height: 64, borderRadius: '50%'}} />
      </Luz>
      <Luz activa={color === 'amarillo'}>
        <div
        data-testid="luz-amarillo"
        style={{background: 'yellow', width: 64, height: 64, borderRadius: '50%'}} />
      </Luz>
      <Luz activa={color === 'verde'}>
        <div 
        data-testid="luz-verde"
        style={{background: 'green', width: 64, height: 64, borderRadius: '50%'}} />
      </Luz>
    </div>
  )
}
