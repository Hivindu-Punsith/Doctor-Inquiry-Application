import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.css']
})
export class PatientsDetailsComponent implements OnInit {

  patients:any;


  constructor(private dataService:DataService) { }


  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.dataService.getPatients().subscribe(res=>{
     this.patients=res;
    });
  }

  deletePatient(id:any){
    this.dataService.deletePatient(id).subscribe(res=>{
      Swal.fire('DELETE SUCCESFUL..!', '', 'success') 
      this.getPatients(); 
  });
  }
}
