import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'; 
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  colore ='yellow';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  

  clickLogout(event: any) {
    this.authService.logout();
    console.log(event.value);
  }
}
