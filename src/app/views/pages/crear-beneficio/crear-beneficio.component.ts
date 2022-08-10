import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { BeneficiosService } from 'src/app/core/services/beneficios.service';
import { BeneficioModel } from 'src/app/core/models-general/beneficio-model';

@Component({
  selector: 'app-crear-beneficio',
  templateUrl: './crear-beneficio.component.html',
  styleUrls: ['./crear-beneficio.component.scss']
})
export class CrearBeneficioComponent implements OnInit {

  noticiaForm: FormGroup;
  TituloPagina = 'BENEFICIO NUEVO';
  id: string;

  constructor( private fb: FormBuilder, private route: Router, private auth: BeneficiosService, private aRouter: ActivatedRoute) {
    
    this.noticiaForm = this.fb.group({
      titulo: ['', Validators.required],
      beneficio: ['', Validators.required],
      activado: 1,
      imagen: ['']
    });

    this.id = aRouter.snapshot.paramMap.get('id');

    console.log(`El id es ${this.id}`);}

  ngOnInit(): void {
    this.isEditar();
  }

  agregarBeneficio() {
    console.log(this.noticiaForm);

    const beneficioData: BeneficioModel = {
      id: 0,
      titulo: this.noticiaForm.get('titulo')?.value,
      descripcion: this.noticiaForm.get('beneficio')?.value,
      imagen: '',
      activado: 1,
      documento: ''
    };

    Swal.fire({
      title: 'Agregando beneficio',
      text: 'Espere por favor...',
      allowOutsideClick: false,
      icon: 'info'
    });

    Swal.showLoading();

    if ( this.id !== null ) {
        this.auth.editBeneficio(this.id, beneficioData ).subscribe( data => {
          Swal.fire({
            title: 'El Beneficio se actualizo',
            text: 'Se actualizo exitosamente',
            icon: 'info'
          });
          this.route.navigate(['/beneficios']);
        }, error => {
          console.log(error);
        });
    } else {
      this.auth.nuevaBeneficio(beneficioData).subscribe( data => {
        console.log(data);
        Swal.fire({
          title: 'El beneficio se agrego',
          text: 'Se agregó exitosamente',
          icon: 'info'
        });
        this.route.navigate(['/beneficios']);
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
      this.TituloPagina = 'EDITAR BENEFICIO';
      this.auth.getBeneficio(this.id).subscribe( data => {
        console.log("***************getBeneficio******************");
        console.log(data.bene);
        this.noticiaForm.setValue({
          titulo : data.bene.titulo,
          beneficio: data.bene.descripcion,
          imagen: data.bene.imagen,
          activado: 1,
          documento: ''
        });
        console.log("*******log*******************");
        console.log(this.noticiaForm);

      });
    }
  }

}
