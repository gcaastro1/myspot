import { Injectable } from '@angular/core'
import { spotifyConfig } from 'src/environments/environment'
import Spotify from 'spotify-web-api-js'

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null

  constructor() {
    this.spotifyApi = new Spotify()
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
    this.spotifyApi.skipToNext()
  }
}
