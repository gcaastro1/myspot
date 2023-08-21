import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component'
import { RouterModule } from '@angular/router'
import { LoginRoutes } from './login.routes'

@NgModule({
  imports: [CommonModule, RouterModule.forChild(LoginRoutes)],
  declarations: [LoginComponent],
})
export class LoginModule {}
