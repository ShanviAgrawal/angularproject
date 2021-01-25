

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { TicketComponent } from './ticket/ticket.component';



@NgModule({
  declarations: [
    AppComponent,
    
    HomepageComponent,
    
    LoginComponent,
    
    TicketComponent
  ],
  imports: [
    BrowserModule,MatToolbarModule,FormsModule,MatSnackBarModule,
    AppRoutingModule,FlexLayoutModule, BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule,MatSliderModule
  ],
  providers: [MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
