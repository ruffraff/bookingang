import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/shared/models/apartment.model';
@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  private apiUrl = 'http://localhost:8006/api'; // Sostituisci con il tuo endpoint Laravel

  constructor(private http: HttpClient) { }

  getHouses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/houses`);
  }

  createApartment(apartment: Apartment): Observable<Apartment> {
    const formData = new FormData();
    formData.append('name', apartment.name);
    formData.append('description', apartment.description);
    formData.append('address', apartment.address);
    formData.append('price_per_night', apartment.price_per_night.toString());
    formData.append('bedrooms', apartment.bedrooms.toString());
    formData.append('bathrooms', apartment.bathrooms.toString());
    if (apartment.photos) {
      formData.append('photos', apartment.photos);
    }
    return this.http.post<Apartment>(this.apiUrl+'/houses', formData);
  }
}
