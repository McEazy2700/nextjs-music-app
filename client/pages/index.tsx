import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React, { useEffect, useState } from 'react'
import MusicList from '../components/molecules/m-musicList/MusicList'
import MusicCard from '../components/molecules/m-music-card/MusicCard'
import { useQuery } from '@apollo/client'
import { getMusicList } from '../graphql/musicQueries'
import { resolveSongList } from '../utils/resolvers'
import MusicPlayer from '../components/molecules/m-music-player/MusicPlayer'

const Home = () => {
  const { loading, data, error } = useQuery(getMusicList)
  const [songs, setSongs] = useState([])
  // console.log({loading, data, error})

  useEffect(()=>{
    data && setSongs(resolveSongList(data))
  },[data])

  console.log(songs)

  return (
    <>
    <Head>
      <title>Tripple Music</title>
    </Head>
    <div className={styles.container}>
    <div>
     {/* <MusicList />  */}
     <MusicCard />
     {songs.map(song => <MusicPlayer key={song.id} src={song.url} />
     )}      
    </div>
    </div>
    </>
  )
}

export default Home;
