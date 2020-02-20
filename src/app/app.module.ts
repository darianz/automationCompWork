import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PhotosComponent } from './components/photos/photos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import{ Routes , RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'home',  component: UsersComponent },
  { path: 'users',  component: UsersComponent },
  { path: 'posts',  component: PostsComponent },
  { path: 'photos',  component: PhotosComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegistrationComponent },
  { path: 'forgot-password',  component: ForgotpassComponent },
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PhotosComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpassComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
