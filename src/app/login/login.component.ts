import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  hide = true;
  constructor(private router:Router , private snack:MatSnackBar) { }
  alert:boolean=false;
  username:string;
  password:string;

  onSubmit(form:NgForm){
    console.log(form.value);
    form.reset();
  }

logIn(){
  if (this.username==="user@gmail.com" && this.password==="user123"){
    this.router.navigate(['./homepage']);
    
  }else {
     if(this.username==="admin@gmail.com" && this.password==="admin123"){
      this.router.navigate(['./edit']);
  }
  else{
    alert("Incorrect Username/Password");
  }}}
  
}
