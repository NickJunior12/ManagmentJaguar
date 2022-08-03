import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UploadBeneficioComponent } from './upload-beneficio.component';
import { NgDropBeneficioDirective } from 'src/app/core/directive/ng-drop-beneficio.directive';

const routes: Routes = [
  {
    path: '',
    component: UploadBeneficioComponent
  }
]

@NgModule({
  declarations: [UploadBeneficioComponent,NgDropBeneficioDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class UploadBeneficioModule { }