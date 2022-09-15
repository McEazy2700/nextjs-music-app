import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React from 'react'
import MusicList from '../components/molecules/m-musicList/MusicList.tsx'
import MusicCard from '../components/molecules/m-music-card/MusicCard.tsx'

const Home = () => {

  return (
    <>
    <Head>
      <title>Tripple Music</title>
    </Head>
    <div className={styles.container}>
     {/* <MusicList />  */}
     <MusicCard />
    </div>
    </>
  )
}

export default Home;
