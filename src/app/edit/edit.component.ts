import { Component, OnInit } from '@angular/core';
import { ProService } from './../pro.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  allTicket:Object;
  isEdit=false;
  ticketObj={
    "category":'',
    "desc":'',
    "state":'',
    "message":''
  };
  
  constructor(private proService:ProService, private _snackBar: MatSnackBar) { }
  
  ngOnInit() {
    
    this.getLatestTicket(); 
  }
  getLatestTicket(){
    this.proService.getAllTicket().subscribe((response)=>{
      this.allTicket =response
    })
  }
  editTicket(ticket){
    this.isEdit = true;
this.ticketObj=ticket;

  }

  deleteTicket(ticket){
    
this.proService.deleteTicket(ticket).subscribe(()=>{
  this.getLatestTicket();
  this._snackBar.open("1 item deleted","OK");

}
)
  }
  

  updateTicket(){
    this.isEdit= !this.isEdit;
    this.proService.updateTicket(this.ticketObj).subscribe(()=>{
      this.getLatestTicket();

    })
  }
}
