import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { CrearBeneficioComponent } from './crear-beneficio.component';

const routes: Routes = [
  {
    path: '',
    component: CrearBeneficioComponent
  }
]

@NgModule({
  declarations: [CrearBeneficioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrearBeneficioModule { }
