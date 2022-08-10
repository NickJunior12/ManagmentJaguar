import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'crear-noticia',
        loadChildren: () => import('./views/pages/crear-noticia/crear-noticia.module').then(m => m.CrearNoticiaModule)
      },
      {
        path: 'editar-noticia/:id',
        loadChildren: () => import('./views/pages/crear-noticia/crear-noticia.module').then(m => m.CrearNoticiaModule)
      },
       {
        path: 'upoad-noticia/:id',
        loadChildren: () => import('./views/pages/upoad-noticia/upoad-noticia.module').then(m => m.UpoadNoticiaModule)
      },
      {
        path: 'beneficios',
        loadChildren: () => import('./views/pages/beneficios/beneficios.module').then(m => m.BeneficiosModule)
      },
      {
        path: 'crear-beneficio',
        loadChildren: () => import('./views/pages/crear-beneficio/crear-beneficio.module').then(m => m.CrearBeneficioModule)
      },
      {
        path: 'editar-beneficio/:id',
        loadChildren: () => import('./views/pages/crear-beneficio/crear-beneficio.module').then(m => m.CrearBeneficioModule)
      },
      {
        path: 'upload-beneficio/:id',
        loadChildren: () => import('./views/pages/upload-beneficio/upload-beneficio.module').then(m => m.UploadBeneficioModule)
      },
      {
        path: 'documentos-beneficios/:id/:titulo',
        loadChildren: () => import('./views/pages/documentos-beneficios/documentos-beneficios.module').then(m => m.DocumentosBeneficiosModule)
      },
      {
        path: 'nuevo-banner',
        loadChildren: () => import('./views/pages/nuevo-banner/nuevo-banner.module').then(m => m.NuevoBannerModule)
      },
      {
        path: 'banners',
        loadChildren: () => import('./views/pages/banners/banners.module').then(m => m.BannersModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/pages/apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'ui-components',
        loadChildren: () => import('./views/pages/ui-components/ui-components.module').then(m => m.UiComponentsModule)
      },
      {
        path: 'advanced-ui',
        loadChildren: () => import('./views/pages/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
      },
      {
        path: 'form-elements',
        loadChildren: () => import('./views/pages/form-elements/form-elements.module').then(m => m.FormElementsModule)
      },
      {
        path: 'advanced-form-elements',
        loadChildren: () => import('./views/pages/advanced-form-elements/advanced-form-elements.module')
        .then(m => m.AdvancedFormElementsModule)
      },
      {
        path: 'charts-graphs',
        loadChildren: () => import('./views/pages/charts-graphs/charts-graphs.module').then(m => m.ChartsGraphsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/pages/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'general',
        loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', redirectTo: 'auth', pathMatch: 'full' }
    ]
  },
  { 
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
