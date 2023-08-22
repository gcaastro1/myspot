import { Component, OnInit, inject } from '@angular/core'
import { Router } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  showPageContent = false

  private spotifyService = inject(SpotifyService)
  private router = inject(Router)

  async ngOnInit() {
    await this.checkAuth()
  }

  async checkAuth() {
    const token = localStorage.getItem('token')

    if (!token) {
      this.notAutenthicated
      return
    }

    const user = await this.spotifyService.startService()

    if (user) this.showPageContent = true
    else {
      this.notAutenthicated()
      this.showPageContent = false
    }
  }

  notAutenthicated() {
    localStorage.clear()
    this.showPageContent = false
    this.router.navigate(['/login'])
  }
}
