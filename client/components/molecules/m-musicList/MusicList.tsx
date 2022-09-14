import React from 'react'
import { useQuery } from '@apollo/client'
import { getAlbums } from '../../../graphql/musicQueries'
import Loading from '../../atoms/a-loading/Loading'

const MusicList = () => {
    const { loading, data, error } = useQuery(getAlbums)
    if (loading){
        return <Loading />
    }
  return (
    <div>{JSON.stringify(data.allAlbums.edges[0].node)}</div>
  )
}

export default MusicList