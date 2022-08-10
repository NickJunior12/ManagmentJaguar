import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { DocumentosBeneficiosComponent } from './documentos-beneficios.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentosBeneficiosComponent
  }
]

@NgModule({
  declarations: [DocumentosBeneficiosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DocumentosBeneficiosModule { }
