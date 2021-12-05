import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { CrearNoticiaComponent } from './crear-noticia.component';

const routes: Routes = [
  {
    path: '',
    component: CrearNoticiaComponent
  }
]

@NgModule({
  declarations: [CrearNoticiaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrearNoticiaModule { }
