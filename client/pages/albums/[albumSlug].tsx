import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { deslugify } from "../../utils/slugifiers";
import { filterAlbumById } from '../../graphql/albumQueries'
import Loading from "../../components/atoms/a-loading/Loading";
import { resolveAlbum } from "../../utils/resolvers";
import { AlbumType } from "../../@types/MusicTypes";
import AlbumInfo from "../../components/molecules/m-albumInfo/AlbumInfo";
import MusicList from "../../components/compounds/c-musicList/MusicList";
import { getMusicByAlbumId } from "../../graphql/musicQueries";
import styles from './AlbumDetailPage.module.scss'

const Album = () => {
  const [albumLoading, setAlbumLoading] = useState(true)
  const [musicLoading, setMusicLoading] = useState(true)
  const [album, setAlbum] = useState<AlbumType>()
  const router = useRouter()
  const { albumSlug } = router.query
  const id = deslugify(albumSlug)
  const { data: albumData, error } = useQuery(filterAlbumById, {
    variables: { id }
  })
  const { data: musicData, error: musicError } = useQuery(getMusicByAlbumId, {
    variables: { id }
  })

  useEffect(() => {
    if (!albumData) {
      setAlbumLoading(true)
    } else {
      setAlbumLoading(false)
      setAlbum(resolveAlbum(albumData))
    }
    if (!musicData) {
      setMusicLoading(true)
    } else {
      setMusicLoading(false)
    }
  }, [albumData])

  return (
    <section className={styles.details}>
      {!albumLoading ? <AlbumInfo album={album} /> : <Loading />}
      {!musicLoading ? <MusicList data={musicData} /> : <Loading />}
    </section>
  )
}

export default Album
