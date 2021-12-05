import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BannersComponent } from './banners.component';

const routes: Routes = [
  {
    path: '',
    component: BannersComponent
  }
]

@NgModule({
  declarations: [BannersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BannersModule { }