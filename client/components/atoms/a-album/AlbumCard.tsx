import React from 'react'
import Link from 'next/link'
import styles from './AlbumCard.module.scss'
import { slugify } from '../../../utils/slugifiers'

type CardType = {
  src: string,
  title: string,
  albumId: number,
}
const AlbumCard = ({ src, title, albumId }: CardType) => {
  const slug = slugify(title, albumId.toString())

  return (
    <Link href={`/albums/${slug}`} >
      <div className={styles.album}>
        <div className={styles.image}>
          <img src={src} alt='phones' />
        </div>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  )
}

export default AlbumCard
