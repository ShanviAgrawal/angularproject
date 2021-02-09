import { ProService } from './../pro.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent  {
  form:FormGroup;
  allTicket:Object;
  today: Date;
  
  ticketObj={
    "category":'',
    "desc":'',
    "state":'',
    "message":''
  };

  constructor(private router:Router, private proService:ProService) {
    this.today =new Date(); 
  }

  submitForm(formObj){
    console.log(formObj);
    this.proService.createTicket(formObj).subscribe((response)=>{
      /*this.getLatestTicket();*/console.log("Added");
    })
    this.router.navigate(['./status']);
    this.form.reset();
    }
  /*ngOnInit() {
    
    this.getLatestTicket(); 
  }
  getLatestTicket(){
    this.proService.getAllTicket().subscribe((response)=>{
      this.allTicket =response
    })
  }*/
  

  
}