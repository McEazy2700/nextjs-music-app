import React from 'react'
import styles from './ArtistContainer.module.scss'

type ArtistType = {
  name: string
  imageUrl: string
}

const ArtistContainer = ({ imageUrl, name }: ArtistType) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.name}>
        <h4>{name}</h4>
      </div>
    </div>
  )
}

export default ArtistContainer
