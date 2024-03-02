import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRoute } from '@angular/router'; // Import ActivatedRoute to access query parameters

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginStatus: string = '';
  errorCode: string = ''; // Define errorCode property to store error code

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute // Inject ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve error code from query parameters
    this.route.queryParams.subscribe(params => {
      this.errorCode = params['errorCode'];
      // Handle error code as needed
      if (this.errorCode) {
        // Handle the error code here (e.g., display error message)
        console.error('Error Code:', this.errorCode);
      }
    });
  }

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
