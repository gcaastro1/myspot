import { Component, OnInit, inject } from '@angular/core'
import { Router } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private spotifyService = inject(SpotifyService)
  private router = inject(Router)

  ngOnInit() {
    this.verifyTokenUrlCallback()
  }

  verifyTokenUrlCallback() {
    const token = this.spotifyService.getTokenUrlCallback()
    if (!!token) {
      this.spotifyService.setToken(token)
      this.router.navigate(['/player'])
    }
  }

  openSpotifyLogin() {
    window.location.href = this.spotifyService.getLoginUrl()
  }
}
