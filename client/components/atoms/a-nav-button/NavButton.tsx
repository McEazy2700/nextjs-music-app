import React, { useContext } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import styles from './NavButton.module.scss'
import { WindowContext } from '../../../context/Global'

const NavButton = ({ onClick, isOpen }) => {
  const context = useContext(WindowContext)
  console.log(isOpen)
  return (
    <button onClick={onClick} className={styles.button}>
      {isOpen ? <MdOutlineClose /> : <BiMenuAltLeft />}
    </button>
  )
}

export default NavButton
