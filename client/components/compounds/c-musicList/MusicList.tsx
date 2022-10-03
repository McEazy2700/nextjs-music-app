import React from 'react'
import MusicCard from '../../molecules/m-music-card/MusicCard'
import { resolveSongList } from '../../../utils/resolvers'
import styles from './MusicList.module.scss'
import { MusicListType } from '../../../@types/ComponentTypes'
import NothingFound from '../../atoms/a-no-data/NothingFound'

const MusicList = ({ data }: MusicListType) => {
  return (
    <section className={styles.cards}>
      {
        data ? resolveSongList(data).map((song: any) => {
          return (
            <MusicCard key={song.id} title={song.title} url={song.photoUrl} artist={song.artist ? song.artist.name : song.album.title} songUrl={song.url} />)
        }) : <NothingFound />
      }
    </section>
  )
}

export default MusicList
