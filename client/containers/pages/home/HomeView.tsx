import React from 'react'
import AlbumList from '../../../components/molecules/m-albumList/AlbumList'
import MusicList from '../../../components/compounds/c-musicList/MusicList'
import styles from './HomeView.module.scss'
import { HomePageType } from '../../../@types/PageTypes'
import Loading from '../../../components/atoms/a-loading/Loading'


const HomeView = ({ musicData, musicIsLoading }: HomePageType) => {
  return (
    <main className={styles.home}>
      <AlbumList />
      {!musicIsLoading ? <MusicList data={musicData} />
        : <div><Loading /></div>}
    </main>
  )
}

export default HomeView
