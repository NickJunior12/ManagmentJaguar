import { Component, OnInit } from '@angular/core';
import { NoticiaModel } from 'src/app/core/models-general/noticia-model';
import { NewsService } from 'src/app/core/services/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {
  listaNoticias: NoticiaModel[] = [];

  constructor( private news: NewsService ) { }

  ngOnInit(): void {
    this.getNoticias();
  }

    getNoticias() {
      this.news.getNoticias()
              .subscribe (resp => {
                console.log('Obteniendo datos de noticias');
                console.log(resp);
                console.log(resp.notis);
                this.listaNoticias = resp.notis;
              }, error => {
                  console.log('error');
              });
    }

    borrarNoticia(id: number){
      console.log("borrar");
      console.log(id);

      this.news.deleteNoticia(id)
      .subscribe( resp=> {
        console.log(resp);
        Swal.fire({
          title: 'La noticia se borro exitosamente',
          text: resp.msg,
          icon: 'info'
        });
        this.getNoticias();
      }, error => {
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'info'
        });
      });
    }

}
