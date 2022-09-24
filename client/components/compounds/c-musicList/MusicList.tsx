import React from 'react'
import { useQuery } from '@apollo/client'
import { getMusicList } from '../../../graphql/musicQueries'
import MusicCard from '../../molecules/m-music-card/MusicCard'
import { resolveSongList } from '../../../utils/resolvers'
import styles from './MusicList.module.scss'
import Loading from '../../atoms/a-loading/Loading'


const MusicList = () => {
  const { loading, data, error } = useQuery(getMusicList)
  // const [songs, setSongs] = useState<MusicType[] | []>([])
  if (loading) {
    return <div><Loading /></div>
  } else {
    console.log(resolveSongList(data))
    return (
      <section className={styles.cards}>
        {
          resolveSongList(data).map((song: any) => {
            return (
              <MusicCard title={song.title} url={song.photoUrl} artist={song.artist ? song.artist.name : song.album.title} songUrl={song.url} />)
          })
        }
      </section>
    )
  }
}

export default MusicList
