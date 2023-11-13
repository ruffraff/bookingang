// apartment.model.ts

export class Apartment {
    name: string;
    description: string;
    address: string;
    price_per_night: number;
    bedrooms: number;
    bathrooms: number;
    photos: File | null;
  
    constructor() {
      this.name = '';
      this.description = '';
      this.address = '';
      this.price_per_night = 0;
      this.bedrooms = 0;
      this.bathrooms = 0;
      this.photos = null;
    }
  }
  