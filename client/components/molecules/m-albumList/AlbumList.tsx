import React from 'react'
import AlbumCard from '../../atoms/a-album/AlbumCard';
import { resolveAlbumList } from '../../../utils/resolvers';
import styles from './AlbumList.module.scss'
import { AlbumListType } from '../../../@types/ComponentTypes'
import NothingFound from '../../atoms/a-no-data/NothingFound';


const AlbumList = ({ albumData }: AlbumListType) => {

  return (
    <section className={styles.list}>
      {
        albumData ? resolveAlbumList(albumData).map((album: any) => {
          return (<AlbumCard
            key={album.albumId}
            albumId={album.albumId}
            src={album.photoUrl} title={album.title} />)
        }) : <NothingFound />
      }
    </section>
  )
}

export default AlbumList
