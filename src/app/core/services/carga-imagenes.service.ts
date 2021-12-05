import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileItem } from '../models-general/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  constructor( private http: HttpClient) {

    console.log('Servicio iniciado');
  }

  cargarImagenes( id: string, imagenes: FileItem[] ) {
    console.log(imagenes);

    const f = imagenes[0].archivo;

    const formData = new FormData();
    formData.append('noticiaImagen', f);

    console.log('imprimo el data');

    console.log('Solo obtenemos el primer archivo');
    console.log(f);

    this.http.post<any>('http://localhost:8000/api/uploads/noticia/' + id, formData ).subscribe( resp => {
      console.log('Respuesta del server');
      console.log(resp);
    }, err => {
      console.log('Respuesta del server con error');
      console.log(err);
    });
  }

  cargarImagenesBanner( id: string, imagenes: FileItem[] ) {
    console.log(imagenes);

    const f = imagenes[0].archivo;

    const formData = new FormData();
    formData.append('bannerImg', f);

    console.log('imprimo el data');

    console.log('Solo obtenemos el primer archivo');
    console.log(f);

    this.http.post<any>('http://localhost:8000/api/uploads/banner', formData ).subscribe( resp => {
      console.log('Respuesta del server');
      console.log(resp);
    }, err => {
      console.log('Respuesta del server con error');
      console.log(err);
    });
  }
}
