import { Component, OnInit } from '@angular/core';
import { ProService } from './../pro.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  allTicket:Object;
  constructor(private proService:ProService, private _snackBar: MatSnackBar) { }

  
   

    
  ngOnInit() {
    
    this.getLatestTicket(); 
  }
  getLatestTicket(){
    this.proService.getAllTicket().subscribe((response)=>{
      this.allTicket =response
    })
  }

  deleteTicket(ticket){
    this.proService.deleteTicket(ticket).subscribe(()=>{
      this.getLatestTicket();
      this._snackBar.open("1 item deleted","OK");

    }
    )
    
      }
  /*submitForm(formObj){
    
    this.proService.createTicket(formObj).subscribe((response)=>{
      this.getLatestTicket();
    })}*/
}
