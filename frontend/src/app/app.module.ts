import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewPatientComponent } from './components/add-new-patient/add-new-patient.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgChartsModule } from 'ng2-charts';
import { PatientsDetailsComponent } from './components/patients-details/patients-details.component';
import { PatientsComponent } from './patients/patients.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { AuthenticationService } from './service/authentication.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addinquiry', component: AddNewPatientComponent },
  { path: 'patients', component: PatientsDetailsComponent },
  { path: 'editPatients/:id', component: EditPatientComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AddNewPatientComponent,
    PatientsDetailsComponent,
    PatientsComponent,
    EditPatientComponent,

  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgChartsModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthenticationService,
    multi:true
   }],
  bootstrap: [AppComponent],
})
export class AppModule {}
