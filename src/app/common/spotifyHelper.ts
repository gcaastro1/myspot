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
