import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './main/landing/landing.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { ProfileUserComponent } from './users/profile-user/profile-user.component';
import { UrgentComponent } from './main/modules/urgent/urgent.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: LandingComponent },
  { path: 'module-urgent', component: UrgentComponent },
  { path: 'profile-user', component: ProfileUserComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
