import { gql } from '@apollo/client'

export const getAlbumList = gql`
    query AllAlbums {
      allAlbums {
        edges {
          node {
            id
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
