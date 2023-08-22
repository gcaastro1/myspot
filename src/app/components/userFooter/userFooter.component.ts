import { Component, OnInit, inject } from '@angular/core'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { UserProps } from 'src/app/interfaces/user.interfaces'
import { SpotifyService } from 'src/app/services/spotify.service'

@Component({
  selector: 'app-userFooter',
  templateUrl: './userFooter.component.html',
  styleUrls: ['./userFooter.component.scss'],
})
export class UserFooterComponent implements OnInit {
  exit = faSignOutAlt

  user: UserProps = null

  private spotifyService = inject(SpotifyService)

  ngOnInit() {
    this.user = this.spotifyService.user
  }

  logout() {
    this.spotifyService.logout()
  }
}
