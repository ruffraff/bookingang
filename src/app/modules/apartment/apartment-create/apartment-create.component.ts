import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/shared/models/apartment.model';
import { ApartmentService } from '../apartment.service';
 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.scss']
})
export class ApartmentCreateComponent implements OnInit {

 apartmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apartmentService: ApartmentService
  ) {}

  ngOnInit(): void {
    this.apartmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      price_per_night: [0, Validators.required],
      bedrooms: [0, Validators.required],
      bathrooms: [0, Validators.required]
    });
  }

  createApartment(): void {
    
    if (this.apartmentForm.valid) {
      
      const apartment = new Apartment();
      Object.assign(apartment, this.apartmentForm.value);
      this.apartmentService.createApartment(apartment).subscribe(
        
        response => {
          console.log("response");
        },
        error => {
          console.log("error");
        }
        
        // ... handle response and error as shown previously
      );console.log("response");
    }
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.apartmentForm.get('photos')?.setValue(file);
    }
  }
}
