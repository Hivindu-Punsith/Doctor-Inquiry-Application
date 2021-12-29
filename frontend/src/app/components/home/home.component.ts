import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patientDetails:any;
  
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPatientsData();
  }

  getPatientsData(){
    this.dataService.getPatientDetails().subscribe(res=>{
     this.patientDetails=res;

    });
  }

  deleteDetails(id:any){
    this.dataService.deletePatientDetails(id).subscribe(res=>{
      Swal.fire('DELETE SUCCESFUL..!', '', 'success') 
      this.getPatientsData(); 
  });
  }
}
