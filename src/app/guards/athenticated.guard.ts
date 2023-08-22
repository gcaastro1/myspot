import { inject } from '@angular/core'
import { CanMatchFn, Router, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { SpotifyService } from '../services/spotify.service'

const isAuthenticated = ():
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> => {
  const router = inject(Router)
  const spotifyService = inject(SpotifyService)

  const token = localStorage.getItem('@MySpot:token')

  const notAutenthicated = () => {
    localStorage.clear()
    router.navigate(['/login'])
    return false
  }

  if (!token) {
    notAutenthicated()
  }

  return new Promise(async (res) => {
    const user = await spotifyService.startService()
    if (user) res(true)
    else res(notAutenthicated())
  })
}

export const canMatch: CanMatchFn = isAuthenticated
