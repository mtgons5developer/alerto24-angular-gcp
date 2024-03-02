import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import AngularFireAuth
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map(authState => {
        if (authState !== null) {
          return true; // User is authenticated
        } else {
          this.router.navigate(['/login']);
          return false; // User is not authenticated
        }
      })
    );
  }
}
