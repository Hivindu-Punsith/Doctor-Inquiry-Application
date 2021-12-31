import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient,private _router: Router) {}

  getPatientDetails() {
    const httpOptions = {
      headers: new HttpHeaders({
      Authorization: `Token ${localStorage.getItem('token')}`
      })
    };
    return this.httpClient.get(`${baseUrl}patientDetails`,httpOptions );
  }

  getPatients() {
    const httpOptions = {
      headers: new HttpHeaders({
      Authorization: `Token ${localStorage.getItem('token')}`
      })
    };
    return this.httpClient.get(`${baseUrl}patients`,httpOptions);
  }

  register(data: any) {
    return this.httpClient.post(`${baseUrl}register`, data);
  }

  login(data: any) {
    return this.httpClient.post(`${baseUrl}login`, data);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUser() {
    return this.httpClient.get(`${baseUrl}user`);
  }

  searchByPhone(phone: any) {
    return this.httpClient.get(`${baseUrl}patientsphone/` + phone);
  }

  insertPatient(id: any, data: any) {
    return this.httpClient.post(
      `${baseUrl}insertNewPatientWithDetails/` + id,
      data
    );
  }

  deletePatientDetails(id: any) {
    return this.httpClient.delete(`${baseUrl}deletePatientDetails/` + id);
  }

  deletePatient(id: any) {
    return this.httpClient.delete(`${baseUrl}deletePatient/` + id);
  }

  updatePatient(id:any,data:any){
    return this.httpClient.put(`${baseUrl}updatePatient/`+id,data)
  }

  getPatientByID(id:any){
    return this.httpClient.get(`${baseUrl}patient/`+id);
  }
}
