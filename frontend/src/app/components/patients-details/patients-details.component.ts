import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.css']
})
export class PatientsDetailsComponent implements OnInit {

  patients:any;
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
];
  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.dataService.getPatients().subscribe(res=>{
     this.dataSource=res;
    });
  }

}
