import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlayerComponent } from './player.component'
import { RouterModule } from '@angular/router'
import { PlayerRoutes } from './player.routes'

@NgModule({
  imports: [CommonModule, RouterModule.forChild(PlayerRoutes)],
  declarations: [PlayerComponent],
})
export class PlayerModule {}
