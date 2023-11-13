import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppConfig } from './app-config';
import { ConfigService } from './config.service';
import { globals } from 'src/config/globals';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'bookingang';
  config!: AppConfig;
  globalVar!: AppConfig;
 

  constructor(private configService: ConfigService) {
  
  }

  ngOnInit(): void {
    this.config = this.configService.readConfig();
    if (this.config.hasOwnProperty('endpoint')) {
      globals.endpoint = this.config.endpoint;
    }
  }
  ngOnDestroy(): void {
      
  }

}
