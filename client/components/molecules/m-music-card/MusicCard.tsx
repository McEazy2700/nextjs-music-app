import React, { useContext } from 'react'
import Image from 'next/image'
import styles from './MusicCard.module.scss'
import { WindowContext } from '../../../context/Global'

type MusicProps = {
  title: string;
  url: string;
  songUrl: string;
  artist: string;
}
const MusicCard = ({ title, url, songUrl, artist }: MusicProps) => {
  const context = useContext(WindowContext)

  const musicClickHandler = () => {
    context.setPlayer({
      playing: true,
      url: songUrl
    })
    context.setArtist({
      name: artist,
      image: url
    })
  }

  return (
    <div onClick={musicClickHandler} className={styles.card}>
      <div className={styles.image}>
        {!url ? <Image src={`/headphones`} width='40rem' height='40rem' /> :
          <img src={url ?? '/headphones'} alt={title} />}
      </div>

      <div className={styles.title}>
        <h4>{title}</h4>
        <h6>{artist}</h6>
      </div>
    </div>
  )
}

export default MusicCard
