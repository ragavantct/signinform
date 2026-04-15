import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin';
import { SignupComponent } from './signup/signup';
import { ForgotPasswordComponent } from './forgot-password/forgot-password';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', redirectTo: 'signin' }
];
