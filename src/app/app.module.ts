

import {HttpClientModule} from '@angular/common/http';
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
import { StatusComponent } from './status/status.component';
import {MatIconModule} from '@angular/material/icon';
import { FaqComponent } from './faq/faq.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { UserproComponent } from './userpro/userpro.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomepageComponent,
    
    LoginComponent,
    
    TicketComponent,
    
    StatusComponent,
    
    FaqComponent,
   
    UserproComponent,
   
    EditComponent,
   
    AboutComponent
  ],
  imports: [
    BrowserModule,MatToolbarModule,FormsModule,MatSnackBarModule,MatIconModule,ReactiveFormsModule,MatSelectModule,HttpClientModule,
    AppRoutingModule,FlexLayoutModule, BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule,MatSliderModule
  ],
  providers: [MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule {MatIconModule }
