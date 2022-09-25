import React, { useContext } from 'react'
import SearchBar from '../../components/atoms/a-search/SearchBar'
import SideBar from '../../components/compounds/c-sideBar/SideBar'
import styles from './Layout.module.scss'
import { WindowContext } from '../../context/Global'
import PlayerBox from '../playerContainer/PlayerBox'


const Layout = ({ children }) => {
  const context = useContext(WindowContext)

  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
        <nav className={styles.nav}>
          <SearchBar />
        </nav>
        {children}
        {context.player.playing && <PlayerBox />}
      </main>
    </div>
  )
}

export default Layout
