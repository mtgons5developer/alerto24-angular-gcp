import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Perform initialization logic here
    this.setupLoginForm();
    this.checkLoggedInStatus();
  }

  private setupLoginForm(): void {
    // Set up form controls, validators, etc.
    // Example:
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  private checkLoggedInStatus(): void {
    // Check if the user is already logged in
    // Example:
    // if (this.authService.isLoggedIn()) {
    //   this.router.navigate(['/dashboard']);
    // }
  }

}
