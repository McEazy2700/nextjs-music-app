import React, { createContext, useState } from 'react'
import { WindowType } from '../@types/Player'
import { ProviderProps } from '../@types/Player'

export const WindowContext = createContext<WindowType | null>(null);


export const WindowContextProvider = ({ children }: ProviderProps) => {
  const [active, setActive] = useState("home")
  const [artist, setArtist] = useState({
    name: '',
    image: ''
  })
  const [player, setPlayer] = useState({
    playing: false,
    url: null
  })
  const defaults: WindowType = {
    setActive: setActive,
    active: active,
    setPlayer: setPlayer,
    player: player,
    artist: artist,
    setArtist: setArtist
  }
  return <WindowContext.Provider value={defaults}>
    {children}
  </WindowContext.Provider>
} 
