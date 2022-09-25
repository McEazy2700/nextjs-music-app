import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { deslugify } from "../../utils/slugifiers";
import { filterAlbumById } from '../../graphql/albumQueries'


const Album = () => {
  const router = useRouter()
  const { albumSlug } = router.query
  const id = deslugify(albumSlug)
  // const { loding, data, error } = useQuery(filterAlbumById, {
  //   variables: { id }
  // })

  return (
    <h1>Album Detail</h1>
  )
}

export default Album
