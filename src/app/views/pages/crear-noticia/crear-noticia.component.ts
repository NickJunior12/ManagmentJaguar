import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { NoticiaModel } from 'src/app/core/models-general/noticia-model';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.scss']
})
export class CrearNoticiaComponent implements OnInit {

  noticiaForm: FormGroup;
  TituloPagina = 'NOTICIA NUEVA';
  id: string;
  fechaVigencia: Date;

  constructor( private fb: FormBuilder, private route: Router, private auth: NewsService, private aRouter: ActivatedRoute) {
    this.noticiaForm = this.fb.group({
      titulo: ['', Validators.required],
      noticia: ['', Validators.required],
      vigencia: ['2021-11-16'],
      imagen: ['']
    });

    this.id = aRouter.snapshot.paramMap.get('id');

    console.log(`El id es ${this.id}`);}

  ngOnInit(): void {
    this.isEditar();
  }

  agregarNoticia() {
    console.log(this.noticiaForm);

    const noticiaData: NoticiaModel = {
      id: 0,
      titulo: this.noticiaForm.get('titulo')?.value,
      descripcion: this.noticiaForm.get('noticia')?.value,
      vigencia: this.noticiaForm.get('vigencia').value,
      imagen: this.noticiaForm.get('imagen').value,
      activo: 1
    };

    Swal.fire({
      title: 'Agregando noticia',
      text: 'Espere por favor...',
      allowOutsideClick: false,
      icon: 'info'
    });

    Swal.showLoading();

    if ( this.id !== null ) {
        this.auth.editNoticia(this.id, noticiaData ).subscribe( data => {
          Swal.fire({
            title: 'La noticia se actualizo',
            text: 'Se actualizo exitosamente',
            icon: 'info'
          });
          // this.route.navigate([ '/noticias' ]);
        }, error => {
          console.log(error);
        });
    } else {
      this.auth.nuevaNoticia(noticiaData).subscribe( data => {
        console.log(data);
        Swal.fire({
          title: 'La noticia se agrego',
          text: 'Se agregó exitosamente',
          icon: 'info'
        });
        // this.route.navigate(['/noticias']);
      }, error => {
        console.log(error);
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'info'
        });
      });
    }


  }

  isEditar() {
    if ( this.id !== null) {
      this.TituloPagina = 'EDITAR NOTICIA';
      this.auth.getNoticia(this.id).subscribe( data => {
        this.noticiaForm.setValue({
          titulo : data.notis.titulo,
          noticia: data.notis.descripcion,
          vigencia: data.notis.vigencia,
          imagen: data.notis.imagen
        });
        this.fechaVigencia = data.notis.vigencia;
      });
    }
  }

}
