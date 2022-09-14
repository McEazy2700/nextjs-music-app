import React from 'react'
import SearchBar from '../../components/atoms/a-search/SearchBar'
import SideBar from '../../components/compounds/c-sideBar/SideBar'
import styles from './Layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <SideBar />
        <main className={styles.main}>
            <nav className={styles.nav}>
                <SearchBar />
            </nav>
            {children}
        </main>
    </div>
  )
}

export default Layout