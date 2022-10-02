import React from 'react'
import styles from './Image.module.scss'

type Image = {
  src: string,
  alt: string
}
const Image = ({ src, alt }: Image) => {
  return (
    <span>
      <img src={src} alt={alt} />
    </span>
  )
}

export default Image


export const ImageLarge = ({ src, alt }: Image) => {
  return (
    <div className={styles.imageLarge}>
      <img src={src} alt={alt} />
    </div>
  )
}

export const ImageRound = ({ src, alt }: Image) => {
  return (
    <div className={styles.imageRound}>
      <img src={src} alt={alt} />
    </div>
  )
}
