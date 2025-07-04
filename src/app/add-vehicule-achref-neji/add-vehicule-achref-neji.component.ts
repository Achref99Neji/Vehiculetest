import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculeService } from '../vehicule.service';
import { Router } from '@angular/router';
import { Vehicule  } from '../models/vehicule.model';

@Component({
    selector: 'app-add-vehicule-achref-neji',
  templateUrl: './add-vehicule-achref-neji.component.html',
})
export class AddVehiculeAchrefNejiComponent {
  vehiculeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vehiculeService: VehiculeService,
    private router: Router
  ) {
    this.vehiculeForm = this.fb.group({
      matricule: ['', [Validators.required, Validators.pattern('^[A-Z].*')]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      marque: ['', Validators.required],
      disponible: [true],         // valeur par défaut
      nbrInteresse: [0]           // valeur par défaut
    });
  }

  onSubmit() {
    if (this.vehiculeForm.valid) {
const vehicule: Vehicule  = this.vehiculeForm.value;
      this.vehiculeService.addVehicule(vehicule).subscribe(() => {
        this.router.navigate(['/vehicules']); // redirige vers la liste
      });
    }
  }
}
