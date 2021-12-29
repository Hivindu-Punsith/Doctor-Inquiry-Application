import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Alldetails } from 'src/app/alldetails';
import { PatientDetails } from 'src/app/patient-details';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css'],
})
export class AddNewPatientComponent implements OnInit {
  phone = new FormControl();
  id: any;
  patientDetails= new PatientDetails();

  addPatentForm= new FormGroup({
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    phonee: new FormControl('',[Validators.required,Validators.minLength(10)]),
    name: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    time: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),

  })
  
  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit(): void {
    this.detailsOfpatient();
    this.insertData();
  }


  detailsOfpatient() {
    this.dataService.searchByPhone(this.phone.value).subscribe((res:any) => {
      
      Swal.fire('PATIENT FOUND!', '', 'success')
      this.patientDetails.name=res.name;
      this.patientDetails.id=res.id;
      this.patientDetails.address=res.address;
      this.patientDetails.age=res.age;
      this.patientDetails.phone=res.phone;
      this.patientDetails.gender=res.gender;
      this.patientDetails.email=res.email;
    });
  }

  insertData() {
    this.dataService
      .insertPatient(this.patientDetails.id, this.patientDetails).subscribe((res) => {

        Swal.fire('New Appointment Added..!', '', 'success');
        this.router.navigate(['/home']);
      });
  }
  get email(){
    return this.addPatentForm.get('email')
  }
  get address(){
    return this.addPatentForm.get('address')
  }
  get phonee(){
    return this.addPatentForm.get('phonee')
  }
  get age(){
    return this.addPatentForm.get('age')
  }
  get gender(){
    return this.addPatentForm.get('gender')
  }
  get time(){
    return this.addPatentForm.get('time')
  }
  get date(){
    return this.addPatentForm.get('date')
  }
  get description(){
    return this.addPatentForm.get('description')
  }
  get name(){
    return this.addPatentForm.get('name')
  }

}
