import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})

export class SignupComponent {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  fullName: string = '';
  email: string = '';
  password: string = '';
  signUpResult: string = '';

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Add user information to Firestore
        this.firestore.collection('users').add({
          fullName: this.fullName,
          email: this.email,
          // Add more fields as needed
        })
        .then(() => {
          this.signUpResult = 'Sign-up successful!';
          this.router.navigate(['/login']);

        })
        .catch(error => {
          this.signUpResult = `Failed to store user information: ${error.message}`;
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // Redirect to login page if the error is due to a missing password
          this.router.navigate(['/login'], { queryParams: { errorCode: error.code } });
        } else {
          this.signUpResult = `Sign-up failed: ${error.message}`;
        }
      });
  }
}