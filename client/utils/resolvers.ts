type MusicData = {
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
  }
}

export const resolveSongList = (data: MusicData) => {
  return data.allSongs.edges.map(edge => edge.node)
}
