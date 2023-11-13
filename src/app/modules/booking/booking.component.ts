import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  dataSource:any
  responseData: any;
  displayedColumns: string[] = ['start_date', 'end_date', 'houseName', 'userName'];
  
  constructor(private bookingService: BookingService,private authService: AuthService, private router: Router) { }

  // navigateToBooking(): void {
  //   this.router.navigate(['/booking']);
  // }

  ngOnInit(): void {

    console.log("data");
    this.bookingService.getBookings().subscribe(data => {
      console.log(data);
      this.dataSource  = data;
      this.responseData  = data;
    });
  }

}
