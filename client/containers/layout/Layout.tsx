import React, { useContext, useState } from 'react'
import SearchBar from '../../components/atoms/a-search/SearchBar'
import SideBar from '../../components/compounds/c-sideBar/SideBar'
import styles from './Layout.module.scss'
import { WindowContext } from '../../context/Global'
import PlayerBox from '../playerContainer/PlayerBox'
import NavButton from '../../components/atoms/a-nav-button/NavButton'


const Layout = ({ children }) => {
  const context = useContext(WindowContext)
  const [isOpen, setIsOpen] = useState(false)

  const navOpenHandler = () => {
    if (context.navIsOpen) {
      context.setNavIsOpen(false)
      setIsOpen(false)
    } else {
      context.setNavIsOpen(true)
      setIsOpen(true)
    }
  }
  return (
    <div className={styles.container}>
      <NavButton onClick={navOpenHandler} isOpen={isOpen} />
      <SideBar />
      <main className={styles.main}>
        <nav className={styles.nav}>
          {/* <SearchBar /> */}
        </nav>
        {children}
        {context.player.playing && <PlayerBox />}
      </main>
    </div>
  )
}

export default Layout
