import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NuevoBannerComponent } from './nuevo-banner.component';
import { NgDropBannerDirective } from 'src/app/core/directive/ng-drop-banner.directive';

const routes: Routes = [
  {
    path: '',
    component: NuevoBannerComponent
  }
]

@NgModule({
  declarations: [NuevoBannerComponent,NgDropBannerDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class NuevoBannerModule { }