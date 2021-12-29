import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/patient';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
})
export class EditPatientComponent implements OnInit {
  id: any;
  data: any;
  patientDetails = new Patient();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getPatientByID(this.id).subscribe((res) => {
      this.data = res;
      this.patientDetails = this.data;
    });
  }

  updatePatient() {
    this.dataService
      .updatePatient(this.id, this.patientDetails)
      .subscribe((res) => {
        Swal.fire('Patient Details Updated..!', '', 'success');
        this.router.navigate(['/patients']);
      });
  }
}
