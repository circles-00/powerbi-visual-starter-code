import { useEffect } from 'react'
import create from 'zustand'
import { HelloWorld } from './components/HelloWorld'
import { useGlobalStore } from './store'

interface IAppProps {
  powerBiData?: powerbi.DataView
}

// This is the main App component, which is the root of our React app.
export const App = ({ powerBiData }) => {
  const { setPowerBiData } = useGlobalStore((state) => state)

  useEffect(() => {
    setPowerBiData(powerBiData)
  }, [powerBiData])

  return (
    <>
      <HelloWorld />
    </>
  )
}
