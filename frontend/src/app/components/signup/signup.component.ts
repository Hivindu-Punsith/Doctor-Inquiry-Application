import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registerr = new Register();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  register() {
    this.dataService.register(this.registerr).subscribe((res) => {
      Swal.fire('You are Regitered..!', '', 'success') 
    });
  }
}
