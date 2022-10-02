import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React, { useContext } from 'react'
import { WindowContext } from '../context/Global'
import { useQuery } from '@apollo/client'
import { getMusicList } from '../graphql/musicQueries'
import HomeView from '../containers/pages/home/HomeView'

const Home = () => {
  const context = useContext(WindowContext)
  const { loading: musicLoading, data, error } = useQuery(getMusicList)

  return (
    <>
      <Head>
        <title>Tripple Music</title>
      </Head>
      <div className={styles.container}>
        {context.active === "home" ?
          <HomeView musicData={data} musicIsLoading={musicLoading} /> : "home"}
      </div>
    </>
  )
}

export default Home;
