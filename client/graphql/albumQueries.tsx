import { gql } from '@apollo/client'

export const getAlbumList = gql`
    query AllAlbums {
      allAlbums {
        edges {
          node {
            albumId
            title
            artist {
              name
              id
            }
            photoUrl
          }
        }
      }
    }`

export const filterAlbumById = gql`
  query AllAlbums($allAlbumsId: ID) {
    allAlbums(id: $allAlbumsId) {
      edges {
        node {
          id
          title
          albumId
          artist {
            name
            id
            artistId
            photoUrl
          }
          photoUrl
        }
      }
    }
  }
`
