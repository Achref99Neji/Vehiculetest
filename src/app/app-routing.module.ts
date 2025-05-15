import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeAchrefNejiComponent } from './vehicule-achref-neji/vehicule-achref-neji.component';
import { AddVehicleAchrefNejiComponent } from './add-vehicule-achref-neji/add-vehicule-achref-neji.component';
import { NotFoundAchrefNejiComponent } from './not-found-achref-neji/not-found-achref-neji.component';

const routes: Routes = [
  { path: 'vehicules', component: VehiculeAchrefNejiComponent },
{ path: 'ajouter', component: AddVehicleAchrefNejiComponent },
  { path: '', redirectTo: 'vehicules', pathMatch: 'full' },
  { path: '**', component: NotFoundAchrefNejiComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
