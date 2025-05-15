import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculeAchrefNejiComponent } from './vehicule-achref-neji/vehicule-achref-neji.component';
import { NotFoundAchrefNejiComponent } from './not-found-achref-neji/not-found-achref-neji.component';
import { VehiculeDetailsAchrefNejiComponent } from './vehicule-details-achref-neji/vehicule-details-achref-neji.component';
import { NavbarAchrefNejiComponent } from './navbar-achref-neji/navbar-achref-neji.component';
import { AddVehicleAchrefNejiComponent } from './add-vehicule-achref-neji/add-vehicule-achref-neji.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarAchrefNejiComponent,
    VehiculeAchrefNejiComponent,
    AddVehicleAchrefNejiComponent,
    NotFoundAchrefNejiComponent,
    VehiculeDetailsAchrefNejiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
   RouterModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
