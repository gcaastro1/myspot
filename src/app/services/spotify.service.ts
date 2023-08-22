import { Injectable } from '@angular/core'
import { spotifyConfig } from 'src/environments/environment'
import Spotify from 'spotify-web-api-js'
import { UserProps } from '../interfaces/user.interfaces'
import { spotifyPlaylist, spotifyUser } from '../common/spotifyHelper'
import { PlaylistProps } from '../interfaces/playlist.interfaces'

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null
  user: UserProps

  constructor() {
    this.spotifyApi = new Spotify()
  }

  async startService() {
    if (!!this.user) return true

    const token = localStorage.getItem('@MySpot:token')

    if (!token) return false

    try {
      this.setToken(token)
      await this.getSpotifyUser()
      return !!this.user
    } catch (err) {
      console.error(err)
      return false
    }
  }

  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe()

    this.user = spotifyUser(userInfo)
  }

  getLoginUrl() {
    const authEndpoint = `${spotifyConfig.authEndpoint}?`
    const clientId = `client_id=${spotifyConfig.clientId}&`
    const redirectUrl = `redirect_uri=${spotifyConfig.redirectUrl}&`
    const scopes = `scope=${spotifyConfig.scopes.join('%20')}&`
    const responseTypes = `response_type=token&show_dialog=true`

    return authEndpoint + clientId + redirectUrl + scopes + responseTypes
  }

  getTokenUrlCallback() {
    if (!window.location.hash) return ''

    const params = window.location.hash.substring(1).split('&')

    return params[0].split('=')[1]
  }

  setToken(token: string) {
    this.spotifyApi.setAccessToken(token)
    localStorage.setItem('@MySpot:token', token)
  }

  async getUserPlaylists(offset = 0, limit = 50): Promise<PlaylistProps[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, {
      offset,
      limit,
    })

    return playlists.items.map(spotifyPlaylist)
  }
}
