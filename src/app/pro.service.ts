import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ProService {

  constructor( private _http:HttpClient) { }

  createTicket(ticket){
    return this._http.post("http://localhost:3000/ticket",ticket);
  }

  getAllTicket(){
    return this._http.get("http://localhost:3000/ticket")
  }

  updateTicket(ticket){
    return this._http.put("http://localhost:3000/ticket/"+ticket.id,ticket)
  }

  
  deleteTicket(ticket){
    return this._http.delete("http://localhost:3000/ticket/" +ticket.id)
  }

}
