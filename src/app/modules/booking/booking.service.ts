import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BookingService {

  private apiUrl = 'http://localhost:8006/api/bookings';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
