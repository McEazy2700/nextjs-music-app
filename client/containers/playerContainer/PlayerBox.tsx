import React, { useContext } from 'react'
import styles from './PlayerBox.module.scss'
import MusicPlayer from '../../components/molecules/m-music-player/MusicPlayer'
import { WindowContext } from '../../context/Global'
import ArtistContainer from '../../components/atoms/a-artist/ArtistContainer'


const PlayerBox = () => {
  const context = useContext(WindowContext)
  return (
    <div className={styles.container}>
      <ArtistContainer name={context.artist.name} imageUrl={context.artist.image} />
      <MusicPlayer src={context.player.url} />
    </div>
  )
}

export default PlayerBox
