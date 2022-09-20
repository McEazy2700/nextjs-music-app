import React from 'react'
import { useQuery } from '@apollo/client'
import { getMusicList} from '../../../graphql/musicQueries.tsx'
import Loading from '../../atoms/a-loading/Loading'

const MusicList = () => {
    const { loading, data, error } = useQuery(getMusicList)
    if (loading){
        return <Loading />
    }
    console.log(data.allSongs.edges[0].node);
    
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default MusicList
