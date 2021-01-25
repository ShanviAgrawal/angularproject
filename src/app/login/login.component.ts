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

  constructor(private router:Router , private snack:MatSnackBar) { }
  alert:boolean=false;
  username:string;
  password:string;

  onSubmit(form:NgForm){
    console.log(form.value);
    form.reset();

}
logIn(){
  if (this.username==="admin@gmail.com" || this.password==="admin123"){
    this.router.navigate(['./homepage']);
    
  }
  else{
    /*alert("it works");*/
    /*this.snack.open("Please enter a valid username/password","Cancel")*/
    alert("Please enter a valid username/password");
  }}}
  
  
