import React from 'react'
import SearchBar from '../../components/atoms/a-search/SearchBar'
import SideBar from '../../components/compounds/c-sideBar/SideBar'
import styles from './Layout.module.scss'
import { WindowContextProvider } from '../../context/Global'


const Layout = ({ children }) => {
  return (
    <WindowContextProvider>
      <div className={styles.container}>
        <SideBar />
        <main className={styles.main}>
          <nav className={styles.nav}>
            <SearchBar />
          </nav>
          {children}
        </main>
      </div>
    </WindowContextProvider>
  )
}

export default Layout
