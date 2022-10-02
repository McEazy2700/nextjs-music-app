import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <AiOutlineLoading className={styles.spinner} />
    </div>
  )
}

export default Loading
