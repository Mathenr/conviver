import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { SignInUpComponent } from './components/templates/sign-in-up/sign-in-up.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'sign',
    component: SignInUpComponent,
    children: [
      {
        path: '',
        redirectTo: 'up',
        pathMatch: 'full'
      }, {
        path: 'up',
        component: RegisterComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
