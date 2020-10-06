import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formLoader();
  }

  formLoader(){
    this.loginForm = this.fb.group({
      userName:[''],
      password:['']
    })
  }

}

