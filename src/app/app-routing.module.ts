import { AboutComponent } from './about/about.component';
import { UserproComponent } from './userpro/userpro.component';
import { FaqComponent } from './faq/faq.component';
import { StatusComponent } from './status/status.component';
import {EditComponent} from './edit/edit.component'
import { TicketComponent } from './ticket/ticket.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'ticket',component:TicketComponent},
  {path:'status',component:StatusComponent},
  {path:'faq',component:FaqComponent},
  {path:'userpro',component:UserproComponent},
  {path:'edit',component:EditComponent}, 
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
