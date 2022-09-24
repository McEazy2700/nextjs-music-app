import React from 'react'
import styles from './SideBar.module.scss'
import Image from 'next/image'
import { HiHome } from 'react-icons/hi'
import { BsMusicNote } from 'react-icons/bs'
import { RiUserVoiceFill } from 'react-icons/ri'
import { CgPlayListSearch } from 'react-icons/cg'
import { SiDiscogs } from 'react-icons/si'
import NavItem from '../../atoms/a-navItem/NavItem'


const SideBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <div className={styles.logoContainer}>
          <SiDiscogs className={styles.logoItem}/>
          <SiDiscogs className={styles.logoItem}/>
          <SiDiscogs className={styles.logoItem}/>
        </div>
        {/* <Image src='/Logo.svg' width='60' height='40'/> */}
      </div>
      <div className={styles.navItems}>
        <NavItem navIcon={HiHome}/>
        <NavItem navIcon={BsMusicNote} />
        <NavItem navIcon={RiUserVoiceFill} />
        <NavItem navIcon={CgPlayListSearch} />
      </div>
    </nav>
  )
}

export default SideBar