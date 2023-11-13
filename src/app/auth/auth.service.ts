// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { globals } from 'src/config/globals';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = globals.endpoint;

  constructor(private http: HttpClient) {
    this.apiUrl = globals.endpoint;
  }

  private authenticated = false;
  private isAdmin = false;

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
  
      this.authenticated = true;
      const body = new URLSearchParams();
      body.set('email', email);
      body.set('password', password);
  
      return this.http.post(`${globals.endpoint}/login`, body.toString(), { headers });
    
  }

  logout() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.post(`${globals.endpoint}/logout`, {}, { headers }).subscribe(() => {
      localStorage.removeItem('token');
      this.authenticated = false;
    });
  }

  isLoggedIn(): boolean {
    return this.authenticated;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  isRoleAdmin(){
    return this.isAdmin;
  }
}
