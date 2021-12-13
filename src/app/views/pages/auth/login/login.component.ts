import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioModel } from 'src/app/core/models-general/usuario-model';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  login( formLogin: NgForm ) {

    if ( formLogin.invalid ) { return; }

    Swal.fire({
      title: 'Validando usuario',
      text: 'Validando credenciales del administrador...',
      allowOutsideClick: false,
      icon: 'info'
    });

    Swal.showLoading();

    console.log('formulario enviado');
    console.log(this.usuario);
    console.log(formLogin);

    this.auth.login( this.usuario ).subscribe( resp => {
      console.log(resp);
      Swal.close();
      this.route.navigateByUrl('/dashboard');
    }, (err) => {
      console.log(err);
      Swal.fire({
        title: 'Error al autenticar',
        text: err.msg,
        icon: 'error'
      });
    });


  }

}
