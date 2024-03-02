// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isAuthenticated(): boolean {
    // Implement your authentication logic here
    // For example, you can check if the user is logged in by checking if there is a valid session or token
    return true; // Return true if the user is authenticated, false otherwise
  }
}
