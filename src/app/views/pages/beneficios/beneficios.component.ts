import { Component, OnInit } from '@angular/core';
import { BeneficioModel } from 'src/app/core/models-general/beneficio-model';
import { BeneficiosService } from 'src/app/core/services/beneficios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {

  listaBeneficios: BeneficioModel[] = [];

  constructor( private bene: BeneficiosService ) { }

  ngOnInit(): void {
    this.getBeneficios();
  }

  getBeneficios() {
      this.bene.getBeneficios()
              .subscribe (resp => {
                // console.log('Obteniendo datos de beneficios');
                // console.log(resp);
                // console.log(resp.bene);
                this.listaBeneficios = resp.bene;
              }, error => {
                  // console.log('error');
              });
    }

    borrarBeneficio(id: number){
      // console.log("borrar");
      // console.log(id);

      this.bene.deleteBeneficio(id)
      .subscribe( resp=> {
        // console.log(resp);
        Swal.fire({
          title: 'El beneficio se borro exitosamente',
          text: resp.msg,
          icon: 'info'
        });
        this.getBeneficios();
      }, error => {
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'info'
        });
      });
    }

    
}
