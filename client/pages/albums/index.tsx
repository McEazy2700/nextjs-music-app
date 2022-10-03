import React from 'react'
import AlbumList from '../../components/molecules/m-albumList/AlbumList'
import { useQuery } from '@apollo/client'
import { getAlbumList } from '../../graphql/albumQueries'
import Loading from '../../components/atoms/a-loading/Loading'

const Albums = () => {
  const { loading, data, error } = useQuery(getAlbumList)

  return (
    <main>
      {!loading ? <AlbumList albumData={data} /> : <Loading />}
    </main>
  )
}

export default Albums
