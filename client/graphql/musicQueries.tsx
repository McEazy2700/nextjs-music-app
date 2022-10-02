import { gql } from '@apollo/client'

export const getMusicList = gql`
    query {
        allSongs {
            edges {
                node {
                    url
                    photoUrl    
                    id
                    title
                    artist {
                      name
                    }
                    album {
                      title
                  }
                }
            }
        }
    }
`
export const getMusicByAlbumId = gql`
  query GetMusicByAlbumId ($albumId: ID) {
    allSongs (album_Id: $albumId) {
      edges {
        node {
            url
            photoUrl    
            id
            title
            artist {
              name
            }
            album {
              title
          }
        }
      }
    }
  }
`

export const getGenreList = gql`
    query {
        allGenres {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
`

export const getAlbums = gql`
    query {
    allAlbums {
        edges {
        node {
            coverPhoto
            dateAdded
            title
        }
        }
    }
    }
`
