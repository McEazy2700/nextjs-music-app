import { gql } from '@apollo/client'

export const getMusicList = gql`
    query {
        allSongs {
            edges {
                node {
                    music
                    title
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