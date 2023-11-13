import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  responseData: any;
  dataSource:any;
   
  displayedColumns: string[] = ['name', 'email', 'address', 'phone', 'created_at', 'updated_at','id'];

  constructor(private concatService:ContactService) { }

  ngOnInit(): void {
    this.concatService.getContacts().subscribe(data => {
      console.log(data);
      this.dataSource  = data;
      this.responseData  = data;
    });
  }

  details(id: number) {
    // logic to view details for the house with the given id
    console.log(id);
  }

  update(id: number) {
    // logic to update the house with the given id
    console.log("updateContact");
  }

  delete(id: number) {
    // logic to delete the house with the given id
    console.log("deleteContact");
  }
}
