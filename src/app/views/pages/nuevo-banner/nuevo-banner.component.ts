import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/core/models-general/file-item';
import { CargaImagenesService } from 'src/app/core/services/carga-imagenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-banner',
  templateUrl: './nuevo-banner.component.html',
  styleUrls: ['./nuevo-banner.component.scss']
})
export class NuevoBannerComponent implements OnInit {

  estaSobreDrop = false;
  archivos: FileItem[] = [];
  id: string;

  constructor( private cargaImagenService: CargaImagenesService) {}

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

    this.cargaImagenService.cargarImagenesBanner( this.id, this.archivos );

    Swal.fire({
      title: 'Upload exitoso',
      text: 'Banner nuevo con exito',
      allowOutsideClick: false,
      icon: 'info'
    });

  }

  limpiarArchivos() {
    this.archivos = [];
  }

}
