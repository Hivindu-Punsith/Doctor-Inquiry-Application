import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';
import { DataService } from 'src/app/service/data.service';

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
      alert('You are Regitered..!');
      window.location.replace('/');
    });
  }
}
