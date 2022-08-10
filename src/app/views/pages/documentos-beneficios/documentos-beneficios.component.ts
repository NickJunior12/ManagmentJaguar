import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentosBeneficios } from 'src/app/core/models-general/documento-beneficio-model';
import { BeneficiosService } from 'src/app/core/services/beneficios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-documentos-beneficios',
  templateUrl: './documentos-beneficios.component.html',
  styles: [
  ]
})
export class DocumentosBeneficiosComponent implements OnInit {

  documentoForm: FormGroup;
  titulo: string;
  id: string;
  
  listaDocs: DocumentosBeneficios[] = [];


  constructor( private fb: FormBuilder, private route: Router, private serv: BeneficiosService, private aRouter: ActivatedRoute) {
    
    this.documentoForm = this.fb.group({
      doc: ['', Validators.required]
    });
  

    this.id = aRouter.snapshot.paramMap.get('id');
    this.titulo = aRouter.snapshot.paramMap.get('titulo');
  }

  ngOnInit(): void {
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.getDocs(this.id);
  }

  getDocs(id_beneficio: string) {
    this.serv.getDoc(id_beneficio)
            .subscribe (resp => {
              // console.log('Obteniendo datos de beneficios');
              // console.log(resp);
              // console.log(resp.bene);
              this.listaDocs = resp.docs;
            }, error => {
                 console.log('error');
            });
  }

  agregarDocumento() {
    console.log(this.documentoForm);

    const docs: DocumentosBeneficios = {
      id: 0,
      id_beneficio: Number(this.id),
      documento: this.documentoForm.get('doc')?.value,
      activado: 1
    };

    Swal.fire({
      title: 'Agregando documento',
      text: 'Espere por favor...',
      allowOutsideClick: false,
      icon: 'info'
    });

    Swal.showLoading();


      this.serv.nuevoDoc(docs).subscribe( data => {
        console.log(data);
        Swal.fire({
          title: 'El documento se agrego',
          text: 'Se agregó exitosamente',
          icon: 'info'
        });
        this.getDocs(this.id);
      }, error => {
        console.log(error);
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'info'
        });
      });
  }

  borrarDoc(id: number){
    // console.log("borrar");
    // console.log(id);

    this.serv.deleteDoc(id)
    .subscribe( resp=> {
      // console.log(resp);
      Swal.fire({
        title: 'El documento se borro exitosamente',
        text: resp.msg,
        icon: 'info'
      });
      this.getDocs(this.id);
    }, error => {
      Swal.fire({
        title: 'Error',
        text: error,
        icon: 'info'
      });
    });
  }

}
