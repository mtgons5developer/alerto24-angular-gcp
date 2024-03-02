import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginStatus: string = '';

  constructor(private auth: AngularFireAuth, private router: Router) { }

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Signed in
        this.loginStatus = 'Login successful!';
        this.router.navigate(['/dashboard']); // Redirect to dashboard after successful login
      })
      .catch((error) => {
        // Handle login errors here
        console.error('Login Error:', error);
        this.loginStatus = 'Login failed. Please check your credentials.';
      });
  }
}
