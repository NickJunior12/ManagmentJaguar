import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/core/models-general/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string;
  urlBaseNoticias: 'https://backend-jaguar.herokuapp.com/';

  constructor( private http: HttpClient) {
    console.log('Servicio http iniciado en frontend');
    this.getToken();
   }

   login( usuario: UsuarioModel) {
      // this.setToken(usuario.usuario);

      const authData = {
        ...usuario
      };

      return this.http.post<any>( 'https://backend-jaguar.herokuapp.com/api/nots/login/', usuario).pipe(
        map( resp => {
          console.log('entro al mapa delrxjs');
          this.setToken('1');
          return resp;
        })
      );



   }

   logout() {

   }

    private setToken( idToken: string ) {
      this.userToken = idToken;
      localStorage.setItem('token', idToken);
    }

   getToken() {

      if ( localStorage.getItem('token') === '1' ) {
        this.userToken = localStorage.getItem('token');
      } else {
        this.userToken = '';
      }

      return this.userToken;

   }

   isAuth(): boolean {
   console.log('Is auth');

    return localStorage.getItem('token') === '1';
   }

}
