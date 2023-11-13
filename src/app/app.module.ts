import { APP_INITIALIZER,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 

import { ToolbarComponent } from './toolbar/toolbar.component';

 
import { LoginComponent } from './modules/login/login.component';
import { AuthService } from './auth/auth.service';
import { ConfigService } from './config.service';
import { ColorgreenDirective } from './colorgreen.directive';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ContactComponent } from './modules/contact/contact.component';

import { RegisterComponent } from './modules/register/register.component';
import { BookingComponent } from './modules/booking/booking.component';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptor } from './jwt.interceptor'; // Aggiusta il percorso se necessario
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartmentListComponent } from './modules/apartment/apartment-list/apartment-list.component';
import { ApartmentCreateComponent } from './modules/apartment/apartment-create/apartment-create.component';
import { ApartmentDetailComponent } from './modules/apartment/apartment-detail/apartment-detail.component';
import { ApartmentEditComponent } from './modules/apartment/apartment-edit/apartment-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

const appInitializerFn = (configService: ConfigService) => {
  return () => {
    return configService.setConfig();
  };
};

export function tokenGetter() {
  return localStorage.getItem('access_token');
}



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    ColorgreenDirective,
    ContactComponent,
    RegisterComponent,
    BookingComponent,
    ApartmentCreateComponent,
    ApartmentDetailComponent,
    ApartmentListComponent,
    ApartmentEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["example.com/api/auth"]
      },
    }),
  ],
  providers: [AuthService,ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService]
    }, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
 