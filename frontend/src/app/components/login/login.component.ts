import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
import { DataService } from 'src/app/service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginn = new Login();
  token: any;

  loginForm= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),

  })
  constructor(private dataService: DataService, private router: Router) {}

  public errorMessage:string | undefined=undefined;

  ngOnInit(): void {
    this.login();
  }

  login() {
    this.dataService.login(this.loginn).subscribe((res: any) => {
      if (res.status == 200) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      } else if (res.status == 401) {
        Swal.fire('UNAUTHORIZED USER..!', '', 'error');
      }
    });
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
}
