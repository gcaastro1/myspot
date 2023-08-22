import { PlaylistProps } from '../interfaces/playlist.interfaces'
import { UserProps } from '../interfaces/user.interfaces'

export const spotifyUser = (
  user: SpotifyApi.UserProfileResponse
): UserProps => {
  return {
    id: user.id,
    name: user.display_name,
    imgUrl: user.images.pop().url,
  }
}

export const spotifyPlaylist = (
  playlist: SpotifyApi.PlaylistObjectSimplified
): PlaylistProps => {
  return {
    id: playlist.id,
    name: playlist.name,
    imgUrl: playlist.images.pop().url,
  }
}
