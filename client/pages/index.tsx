import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React from 'react'
import MusicList from '../components/molecules/m-musicList/MusicList.tsx'

const Home = () => {

  return (
    <>
    <Head>
      <title>Tripple Music</title>
    </Head>
    <div className={styles.container}>
     <MusicList /> 
    </div>
    </>
  )
}

export default Home;
