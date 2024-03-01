import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})

export class SignupComponent {

  constructor(private afAuth: AngularFireAuth) { }

  fullName: string = '';
  email: string = '';
  password: string = '';
  signUpResult: string = '';

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.signUpResult = 'Sign-up successful!';
      })
      .catch(error => {
        this.signUpResult = `Sign-up failed: ${error.message}`;
      });
  }
}
