import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlayerComponent } from './player.component'
import { RouterModule } from '@angular/router'
import { PlayerRoutes } from './player.routes'
import { LeftAsideComponent } from 'src/app/components/leftAside/leftAside.component'
import { MenuButtonComponent } from 'src/app/components/menuButton/menuButton.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes),
    FontAwesomeModule,
  ],
  declarations: [PlayerComponent, LeftAsideComponent, MenuButtonComponent],
})
export class PlayerModule {}
