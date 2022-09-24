import React, { ReactNode } from "react";

export interface Player {
  playing: boolean;
  url: string | null;
}

type Artist = {
  name: string,
  image?: string
}

export type WindowType = {
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>
  setActive: React.Dispatch<React.SetStateAction<string>>
  active: string | "home" | "music" | "album" | "artist";
  artist?: Artist;
  setArtist?: React.Dispatch<React.SetStateAction<ArtistType>>
}

export type ProviderProps = {
  children: React.ReactNode
}
