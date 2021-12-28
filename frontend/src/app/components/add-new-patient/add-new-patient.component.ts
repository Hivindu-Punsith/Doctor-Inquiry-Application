import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Alldetails } from 'src/app/alldetails';
import { PatientDetails } from 'src/app/patient-details';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css'],
})
export class AddNewPatientComponent implements OnInit {
  phone = new FormControl();
  id: any;
  patientDetails= new PatientDetails();
  newPatientDetails = new Alldetails();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.detailsOfpatient();
    this.insertData();
  }

  detailsOfpatient() {
    this.dataService.searchByPhone(this.phone.value).subscribe((res:any) => {
      console.log(res);
      alert('Exist Patient..!');
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
      .insertPatient(this.patientDetails.id, this.newPatientDetails)
      .subscribe((res) => {
        alert('New Appointment Added..!');
        window.location.replace('/home');
      });
  }
}
