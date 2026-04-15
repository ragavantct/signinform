import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css']
})
export class SigninComponent {

  signInForm!: FormGroup;
  submitted = false; 

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.submitted = true;

    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
    }
  }
  onForgotPassword() {
  const email = this.signInForm.get('email')?.value;

  if (!email) {
    alert("Please enter your email first ");
    return;
  }

  alert("Password reset link sent to " + email );
}
}
