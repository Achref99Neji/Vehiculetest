import { Component } from '@angular/core';
import { VehiculeService } from '../vehicule.service';
import { Vehicule  } from '../models/vehicule.model';
@Component({
  selector: 'app-vehicule-achref-neji',
  templateUrl: './vehicule-achref-neji.component.html',
  styleUrls: ['./vehicule-achref-neji.component.scss']
})
export class VehiculeAchrefNejiComponent {
vehicules: Vehicule [] = [];

  constructor(private vehiculeService: VehiculeService) {}

  ngOnInit(): void {
    this.vehiculeService.getVehicules().subscribe(data => {
      this.vehicules = data;
    });
}}
