import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileItem } from 'src/app/core/models-general/file-item';
import { CargaImagenesService } from 'src/app/core/services/carga-imagenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upoad-noticia',
  templateUrl: './upoad-noticia.component.html',
  styleUrls: ['./upoad-noticia.component.scss']
})
export class UpoadNoticiaComponent implements OnInit {

  estaSobreDrop = false;
  archivos: FileItem[] = [];
  id: string;

  constructor( private cargaImagenService: CargaImagenesService, private aRouter: ActivatedRoute, private route: Router ) {
    this.id = aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  }

  cargarImagenes() {
    Swal.fire({
      title: 'Subiendo imagen',
      text: 'Espere por favor...',
      allowOutsideClick: false,
      icon: 'info'
    });

    Swal.showLoading();

    this.cargaImagenService.cargarImagenes( this.id, this.archivos );

    Swal.fire({
      title: 'Upload exitoso',
      text: 'Noticia Actualizada con exito',
      allowOutsideClick: false,
      icon: 'info'
    });

  }

  limpiarArchivos() {
    this.archivos = [];
  }

}
