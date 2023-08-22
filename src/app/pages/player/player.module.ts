import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { PlayerRoutes } from './player.routes'

import { PlayerComponent } from './player.component'
import { LeftAsideComponent } from 'src/app/components/leftAside/leftAside.component'
import { MenuButtonComponent } from 'src/app/components/menuButton/menuButton.component'
import { UserFooterComponent } from 'src/app/components/userFooter/userFooter.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes),
    FontAwesomeModule,
  ],
  declarations: [
    PlayerComponent,
    LeftAsideComponent,
    MenuButtonComponent,
    UserFooterComponent,
  ],
})
export class PlayerModule {}
