import React, { useContext } from 'react'
import styles from './SideBar.module.scss'
import { HiHome } from 'react-icons/hi'
import { CgPlayListSearch } from 'react-icons/cg'
import { SiDiscogs } from 'react-icons/si'
import NavItem from '../../atoms/a-navItem/NavItem'
import { WindowContext } from '../../../context/Global'


const SideBar = () => {
  const context = useContext(WindowContext)

  return (
    <nav className={context.navIsOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}>
      <div>
        <div className={styles.logoContainer}>
          <SiDiscogs className={styles.logoItem} />
          <SiDiscogs className={styles.logoItem} />
          <SiDiscogs className={styles.logoItem} />
        </div>
        {/* <Image src='/Logo.svg' width='60' height='40'/> */}
      </div>
      <div className={styles.navItems}>
        <NavItem path='/' hint='Home' navIcon={HiHome} />
        {/* <NavItem hint='Songs' navIcon={BsMusicNote} /> */}
        {/* <NavItem hint='Artist' navIcon={RiUserVoiceFill} /> */}
        <NavItem path='/albums' hint='Albums' navIcon={CgPlayListSearch} />
      </div>
    </nav>
  )
}

export default SideBar
