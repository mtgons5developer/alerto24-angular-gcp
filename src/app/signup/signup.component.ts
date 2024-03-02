import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})

export class SignupComponent {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
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
        })
        .catch(error => {
          this.signUpResult = `Failed to store user information: ${error.message}`;
        });
      })
      .catch(error => {
        this.signUpResult = `Sign-up failed: ${error.message}`;
      });
  }
}