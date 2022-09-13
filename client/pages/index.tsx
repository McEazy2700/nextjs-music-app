// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React from 'react'
import { useQuery } from '@apollo/client'

import { getMusicList } from '../graphql/musicQueries'
import SearchBar from '../components/atoms/a-search/SearchBar'
import SideBar from '../components/compounds/c-sideBar/SideBar'

const Home = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <SearchBar />
    </div>
  )
}

export default Home;