import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patientDetails:any;
  dataSource:any;
  
  constructor(private dataService:DataService) { }

  displayedColums=[
                    "id",
                    "name",
                    "address",
                    "phone",
                    "age",
                    "email",
                    "gender",
                    "date",
                    "time",
                    "description"
  ];


  ngOnInit(): void {
    this.getPatientsData();
  }

  getPatientsData(){
    this.dataService.getPatientDetails().subscribe(res=>{
     this.dataSource=res;
    });
  }

  
}
