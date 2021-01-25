import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {

  constructor(private router:Router ) { }

  

raiseTicket(){
  this.router.navigate(['./ticket']);
  
}}
