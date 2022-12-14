export type MusicData = {
  allSongs: {
    __typename: string
    edges: {
      __typename: string
      node: {
        __typename: string
        photoUrl: string
        id: string
        songUrl: string
        title: string
        artist: {
          __typename: string
          id: string
          name: string
        }
      }
    }[]
  } | null
}

export type AlbumData = {
  allAlbums: {
    __typename: string
    edges: {
      node: {
        __typename: string
        artist: {
          __typename: string
          id: string
          name: string
          photoUrl: string
          artistId: string
        }
        albumId: string
        id: string
        photoUrl: string
        title: string
      }
    }[]
  } | null
}

export const resolveSongList = (data: MusicData) => {
  return data.allSongs.edges.map(edge => edge.node) ?? null
}

export const resolveAlbumList = (data: AlbumData) => {
  return data.allAlbums.edges.map(edge => edge.node) ?? null
}

export const resolveAlbum = (data: AlbumData) => {
  return data.allAlbums.edges[0].node ?? null
}
