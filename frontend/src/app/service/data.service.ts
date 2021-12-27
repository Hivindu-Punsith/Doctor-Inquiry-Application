import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getPatientDetails(){
    return this.httpClient.get('http://127.0.0.1:8000/api/patientDetails');
  }
  
  register(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/register',data);
  }

  login(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/login',data);
  }

  searchByPhone(phone:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/patientsphone/'+phone);
  }

  insertPatient(id:any,data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/insertNewPatientWithDetails/'+id,data);
  }
}
