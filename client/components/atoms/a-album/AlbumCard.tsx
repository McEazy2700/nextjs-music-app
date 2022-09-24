import React, { useContext } from 'react'
import styles from './AlbumCard.module.scss'
import { WindowContext } from '../../../context/Global'

type CardType = {
  src: string,
  title: string
}
const AlbumCard = ({ src, title }: CardType) => {
  const context = useContext(WindowContext)

  const albumClickHandler = () => {
    context.setActive("album")
  }
  return (
    <div onClick={albumClickHandler} className={styles.album}>
      <div className={styles.image}>
        <img src={src} alt='phones' />
      </div>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default AlbumCard
