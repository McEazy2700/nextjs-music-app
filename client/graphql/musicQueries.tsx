import { gql } from '@apollo/client'

export const getMusicList = gql`
    query {
        allSongs {
            edges {
                node {
                    url
                    coverPhoto    
                    id
                    artist {
                        id
                        name
                    }
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
