import React from 'react'
import AlbumList from '../../../components/molecules/m-albumList/AlbumList'
import MusicList from '../../../components/compounds/c-musicList/MusicList'
import styles from './HomeView.module.scss'


const HomeView = () => {
  return (
    <main className={styles.home}>
      <AlbumList />
      <MusicList />
    </main>
  )
}

export default HomeView
