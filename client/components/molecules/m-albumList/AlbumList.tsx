import React from 'react'
import { useQuery } from "@apollo/client";
import { getAlbumList } from "../../../graphql/albumQueries";
import AlbumCard from '../../atoms/a-album/AlbumCard';
import { resolveAlbumList } from '../../../utils/resolvers';
import styles from './AlbumList.module.scss'


const AlbumList = () => {
  const { loading, data, error } = useQuery(getAlbumList)

  if (loading) {
    return <div>Loadin ...</div>
  }
  return (
    <section className={styles.list}>
      {
        resolveAlbumList(data).map((album: any) => {
          return (<AlbumCard src={album.photoUrl} title={album.title} />)
        })
      }
    </section>
  )
}

export default AlbumList
