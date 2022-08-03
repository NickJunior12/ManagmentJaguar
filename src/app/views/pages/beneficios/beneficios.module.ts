import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';



// Ng2-charts
import { ChartsModule } from 'ng2-charts';

import { BeneficiosComponent } from './beneficios.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficiosComponent
  }
]

@NgModule({
  declarations: [BeneficiosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeahterIconModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    ChartsModule
  ]
})
export class BeneficiosModule { }
