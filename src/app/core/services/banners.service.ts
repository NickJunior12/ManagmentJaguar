import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor( private http: HttpClient) {

    console.log('Servicio banners iniciado');
  }

 getBanners(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/uploads/get-banners');
  }
}
