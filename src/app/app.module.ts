// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { AppComponent } from './app.component';
import { LandingComponent } from './main/landing/landing.component';
import { environment } from '../environments/environment.prod';
import { NavbarComponent } from './main/navbar/navbar.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { ProfileUserComponent } from './users/profile-user/profile-user.component';
import { UrgentComponent } from './main/modules/urgent/urgent.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    CreateUserComponent,
    LoginUserComponent,
    ProfileUserComponent,
    UrgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
