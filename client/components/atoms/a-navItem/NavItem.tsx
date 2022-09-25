import React from 'react'
import Link from 'next/link'
import styles from './NavItem.module.scss'
import { IconType } from 'react-icons'

type NavItemType = {
  navIcon: IconType,
  path?: string,
  hint?: string,
}
const NavItem: React.FC<NavItemType> = (props) => {
  const [classes, setClasses] = React.useState(styles.container)
  const iconHoverHandler = () => {
    setClasses(`${styles.container} ${styles.active}`)
  }
  const iconLeaveHandler = () => {
    setClasses(styles.container)
  }
  return (
    <div className={classes} onMouseOver={iconHoverHandler} onMouseLeave={iconLeaveHandler}>
      <Link href={`${props.path}`}>
        {<props.navIcon className={styles.icon} />}
      </Link>
      <span className={styles.hint}>{props.hint}</span>
    </div>
  )
}

export default NavItem
