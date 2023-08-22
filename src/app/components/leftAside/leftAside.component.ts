import { Component, OnInit, inject } from '@angular/core'
import {
  faGuitar,
  faHome,
  faMusic,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { PlaylistProps } from 'src/app/interfaces/playlist.interfaces'
import { SpotifyService } from 'src/app/services/spotify.service'

@Component({
  selector: 'app-leftAside',
  templateUrl: './leftAside.component.html',
  styleUrls: ['./leftAside.component.scss'],
})
export class LeftAsideComponent implements OnInit {
  selectedMenu = 'Home'

  playlists: PlaylistProps[] = []

  home = faHome
  search = faSearch
  artist = faGuitar
  music = faMusic

  private spotifyService = inject(SpotifyService)

  ngOnInit() {
    this.getPlaylists()
  }

  handleButton(button: string) {
    this.selectedMenu = button
  }

  async getPlaylists() {
    this.playlists = await this.spotifyService.getUserPlaylists()
  }
}
