import { Component, OnInit, inject } from '@angular/core'
import { SpotifyService } from 'src/app/services/spotify.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private spotifyService = inject(SpotifyService)

  ngOnInit() {
    this.verifyTokenUrlCallback()
  }

  verifyTokenUrlCallback() {
    const token = this.spotifyService.getTokenUrlCallback()
    if (!!token) this.spotifyService.setToken(token)
  }

  openSpotifyLogin() {
    window.location.href = this.spotifyService.getLoginUrl()
  }
}
