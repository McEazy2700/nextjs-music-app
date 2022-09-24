import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React, { useContext } from 'react'
import PlayerBox from '../containers/playerContainer/PlayerBox'
import { WindowContext } from '../context/Global'
import HomeView from '../containers/pages/home/HomeView'

const Home = () => {
  const context = useContext(WindowContext)

  return (
    <>
      <Head>
        <title>Tripple Music</title>
      </Head>
      <div className={styles.container}>
        {context.active === "home" ?
          <HomeView /> : "home"}
        {
          context.player.playing && <PlayerBox />
        }
      </div>
    </>
  )
}

export default Home;
