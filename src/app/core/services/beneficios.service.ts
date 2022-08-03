import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeneficioModel } from '../models-general/beneficio-model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiosService {

  constructor(private http: HttpClient) {
    console.log('Servicio Beneficios http iniciado en frontend');
   }

  getBeneficios(): Observable<any> {
    return this.http.get<any>('https://backend-jaguar.herokuapp.com/api/beneficios/');
  }

  nuevaBeneficio(noti: BeneficioModel): Observable<any> {
     return this.http.post<any>('https://backend-jaguar.herokuapp.com/api/beneficios/', noti);
  }

  getBeneficio(id: string): Observable<any> {
    return this.http.get<any>('https://backend-jaguar.herokuapp.com/api/beneficios/' + id);
  }

  editBeneficio(id: string, dataBeneficio: BeneficioModel): Observable<any> {
     return this.http.post<any>('https://backend-jaguar.herokuapp.com/api/beneficios/actualizarBeneficio/' + id, dataBeneficio);
  }

  deleteBeneficio(id: number): Observable<any> {
    return this.http.delete<any>('https://backend-jaguar.herokuapp.com/api/beneficios/' + id);
 }
}
