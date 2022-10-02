export type MusicType = {
  title: string,
  url: string
}

export type AlbumType = {
  albumId: string,
  id: string,
  photoUrl: string,
  title: string,
  artist: {
    __typename: string,
    id: string,
    name: string
    photoUrl: string
    artistId: string
  }
}

export type AlbumInfoType = {
  album: AlbumType
}
