import { MusicData, AlbumData } from "../utils/resolvers";


export type HomePageType = {
  musicData: MusicData,
  musicIsLoading: boolean,
  albumData: AlbumData,
  albumIsLoading: boolean
}
