import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit {

  houses: any[] = [];
  displayedColumns: string[] = ['name', 'description', 'address', 'price_per_night', 'bedrooms', 'bathrooms','id'];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.apartmentService.getHouses().subscribe(data => {
      console.log(data);
      this.houses = data;
    });
  }

  details(id: number) {
    // logic to view details for the house with the given id
    console.log(id);
  }

  update(id: number) {
    // logic to update the house with the given id
    console.log("updateapartment");
  }

  delete(id: number) {
    // logic to delete the house with the given id
    console.log("deleteApartment");
  }
}
