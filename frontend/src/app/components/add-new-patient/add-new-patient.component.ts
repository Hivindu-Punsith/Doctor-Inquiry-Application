import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {

  phone = new FormControl();
  id:any;
  patientDetails:any;
  newPatientDetails:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.detailsOfpatient();
  }


  detailsOfpatient(){
    this.dataService.searchByPhone(this.phone.value).subscribe(res=>{

      if(res==null){
        alert("No Such Patient..!");
      }else{
      console.log(res);
      alert("Exist Patient..!");
      this.patientDetails=res;
      }
    })
  }

  insertData(){
    this.dataService.insertPatient(this.id,this.newPatientDetails).subscribe(res=>{
      alert('New Appointment Added..!');
      window.location.replace('/home');
    });
  }
  

}
