import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentListComponent } from './modules/apartment/apartment-list/apartment-list.component';
import { ApartmentCreateComponent } from './modules/apartment/apartment-create/apartment-create.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './modules/login/login.component';
import { ContactComponent } from './modules/contact/contact.component';
import { BookingComponent } from './modules/booking/booking.component';
import { RegisterComponent } from './modules/register/register.component';


const routes: Routes = [
  { path: 'apartment', component: ApartmentListComponent},
  { path: 'apartment/create', component: ApartmentCreateComponent},
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'booking', component: BookingComponent , canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/apartment', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
