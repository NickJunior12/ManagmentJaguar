import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UpoadNoticiaComponent } from './upoad-noticia.component';
import { NgDropFilesDirective } from 'src/app/core/directive/ng-drop-files.directive';

const routes: Routes = [
  {
    path: '',
    component: UpoadNoticiaComponent
  }
]

@NgModule({
  declarations: [UpoadNoticiaComponent,NgDropFilesDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class UpoadNoticiaModule { }