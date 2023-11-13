import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8006/api/contacts';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

 
}