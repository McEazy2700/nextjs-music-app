import React from 'react'
import styles from './NavItem.module.scss'
import { IconType } from 'react-icons'


const NavItem: React.FC<{navIcon:IconType}> = (props) => {
    const [classes, setClasses] = React.useState(styles.container)
    const iconHoverHandler = ()=>{
        setClasses(`${styles.container} ${styles.active}`)
    }
    const iconLeaveHandler = ()=>{
        setClasses(styles.container)
    }
  return (
    <div className={classes} onMouseOver={iconHoverHandler} onMouseLeave={iconLeaveHandler}>
        {<props.navIcon className={styles.icon} />}
    </div>
  )
}

export default NavItem