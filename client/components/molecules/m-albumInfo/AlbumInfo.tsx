import React from 'react'
import { ImageLarge, ImageRound } from '../../atoms/a-image/Image'
import { AlbumInfoType } from '../../../@types/MusicTypes'
import styles from './AlbumInfo.module.scss'


const AlbumInfo = ({ album }: AlbumInfoType) => {
  return (
    <div className={styles.albumInfoContainer}>
      <ImageLarge src={album.photoUrl} alt={album.title} />
      <div className={styles.albumInfo}>
        <div className={styles.albumText}>
          <h1>{album.title}</h1>
        </div>
        <div className={styles.artistInfo}>
          <ImageRound src={album.artist.photoUrl} alt={album.artist.name} />
          <div className={styles.artistText}>
            <h2>{album.artist.name}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumInfo
