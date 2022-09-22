import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React, { useEffect, useState, useContext } from 'react'
import MusicList from '../components/compounds/c-musicList/MusicList'
import MusicCard from '../components/molecules/m-music-card/MusicCard'
import { useQuery } from '@apollo/client'
import { getMusicList } from '../graphql/musicQueries'
import { resolveSongList } from '../utils/resolvers'
import PlayerBox from '../containers/playerContainer/PlayerBox'
import { WindowContext } from '../context/Global'

const Home = () => {
  const { loading, data, error } = useQuery(getMusicList)
  const [songs, setSongs] = useState([])
  const context = useContext(WindowContext)

  useEffect(() => {
    data && setSongs(resolveSongList(data))
  }, [data])

  console.log(songs)

  return (
    <>
      <Head>
        <title>Tripple Music</title>
      </Head>
      <div className={styles.container}>
        <MusicList />
        {
          context.player.playing && <PlayerBox />
        }
      </div>
    </>
  )
}

export default Home;
