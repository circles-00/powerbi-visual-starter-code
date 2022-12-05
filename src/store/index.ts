import create from 'zustand'

interface IGlobalStore {
  powerBiData: powerbi.DataView
  setPowerBiData: (data: powerbi.DataView) => void
}

export const useGlobalStore = create<IGlobalStore>((set) => ({
  powerBiData: null,
  setPowerBiData: (data: powerbi.DataView) => set({ powerBiData: data }),
}))
