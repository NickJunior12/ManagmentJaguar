import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Menú',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Nueva Noticia',
    icon: 'home',
    link: '/crear-noticia'
  },
  {
    label: 'Banners',
    icon: 'home',
    link: '/banners'
  },
  {
    label: 'Subir Banner',
    icon: 'home',
    link: '/nuevo-banner'
  },
  {
    label: 'Beneficios',
    icon: 'home',
    link: '/beneficios'
  },
];
