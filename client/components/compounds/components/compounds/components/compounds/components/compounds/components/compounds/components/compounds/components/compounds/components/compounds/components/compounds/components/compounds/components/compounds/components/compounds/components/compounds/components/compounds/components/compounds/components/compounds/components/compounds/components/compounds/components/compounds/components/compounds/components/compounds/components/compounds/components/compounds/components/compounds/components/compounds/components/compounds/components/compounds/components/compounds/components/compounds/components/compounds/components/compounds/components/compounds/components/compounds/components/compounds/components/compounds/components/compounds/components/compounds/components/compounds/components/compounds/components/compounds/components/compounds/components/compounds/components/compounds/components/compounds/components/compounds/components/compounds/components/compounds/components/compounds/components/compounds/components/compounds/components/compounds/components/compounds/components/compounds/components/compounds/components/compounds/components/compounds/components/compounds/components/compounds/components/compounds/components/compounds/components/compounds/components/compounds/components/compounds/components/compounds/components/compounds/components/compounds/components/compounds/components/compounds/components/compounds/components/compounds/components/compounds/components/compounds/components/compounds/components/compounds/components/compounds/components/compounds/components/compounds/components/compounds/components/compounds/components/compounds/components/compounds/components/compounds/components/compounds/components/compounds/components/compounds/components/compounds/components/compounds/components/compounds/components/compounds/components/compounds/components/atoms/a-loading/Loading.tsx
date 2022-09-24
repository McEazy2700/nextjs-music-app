import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <AiOutlineLoading className={styles.spinner}/>
  )
}

export default Loading