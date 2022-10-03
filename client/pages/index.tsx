import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React, { useContext } from 'react'
import { WindowContext } from '../context/Global'
import { useQuery } from '@apollo/client'
import { getMusicList } from '../graphql/musicQueries'
import HomeView from '../containers/pages/home/HomeView'
import { getAlbumList } from '../graphql/albumQueries'

const Home = () => {
  const context = useContext(WindowContext)
  const { loading: musicLoading, data: musicData, error: musicError } = useQuery(getMusicList)
  const { loading: albumLoading, data: albumData, error: albumError } = useQuery(getAlbumList)


  return (
    <>
      <Head>
        <title>Tripple Music</title>
      </Head>
      <div className={styles.container}>
        {context.active === "home" ?
          <HomeView
            musicData={musicData}
            musicIsLoading={musicLoading}
            albumData={albumData}
            albumIsLoading={albumLoading} /> : "home"}
      </div>
    </>
  )
}

export default Home;

export const getServerSideProps = async () => {
  return {
    props: {
      musicData: 'Hello World'
    }
  }
}
