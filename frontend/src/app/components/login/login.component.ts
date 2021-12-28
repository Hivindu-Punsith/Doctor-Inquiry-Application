import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
import { DataService } from 'src/app/service/data.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginn = new Login();
  token :any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

login(){
  this.dataService.login(this.loginn).subscribe(res=>{
    console.log(res)
  
 
  })
}

}
