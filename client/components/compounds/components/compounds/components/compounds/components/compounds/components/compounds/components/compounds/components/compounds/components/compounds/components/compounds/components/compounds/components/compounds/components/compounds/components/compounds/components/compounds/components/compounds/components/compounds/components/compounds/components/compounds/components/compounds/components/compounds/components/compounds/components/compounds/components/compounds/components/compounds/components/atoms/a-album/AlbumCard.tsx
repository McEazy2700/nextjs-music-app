import React from 'react'
import styles from './AlbumCard.module.scss'
import phones from '../../../assets/headphones.jpg'

type CardType = {
  src: string
}
const AlbumCard = ({ src }: CardType) => {
  return (
    <div>
      <img src={src} alt='phones' />
    </div>
  )
}

export default AlbumCard
