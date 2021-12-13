import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoticiaModel } from '../models-general/noticia-model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
    console.log('Servicio Noticias http iniciado en frontend');
   }

  getNoticias(): Observable<any> {
    return this.http.get<any>('https://backend-jaguar.herokuapp.com/api/nots');
  }

  nuevaNoticia(noti: NoticiaModel): Observable<any> {
     return this.http.post<any>('https://backend-jaguar.herokuapp.com/api/nots', noti);
  }

  getNoticia(id: string): Observable<any> {
    return this.http.get<any>('https://backend-jaguar.herokuapp.com/api/nots/' + id);
  }

  editNoticia(id: string, dataNoticia: NoticiaModel): Observable<any> {
     return this.http.post<any>('https://backend-jaguar.herokuapp.com/api/nots/actualizarNoticia/' + id, dataNoticia);
  }
}
