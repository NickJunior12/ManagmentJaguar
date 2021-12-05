import { Component, OnInit } from '@angular/core';


import { NoticiaModel } from 'src/app/core/models-general/noticia-model';
import { NewsService } from 'src/app/core/services/news.service';

// export type apexChartOptions = {
//   series: ApexAxisChartSeries;
//   nonAxisSeries: ApexNonAxisChartSeries;
//   colors: string[];
//   grid: ApexGrid;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   markers: ApexMarkers,
//   stroke: ApexStroke,
//   legend: ApexLegend,
//   responsive: ApexResponsive[],
//   tooltip: ApexTooltip,
//   fill: ApexFill
//   dataLabels: ApexDataLabels,
//   plotOptions: ApexPlotOptions,
//   labels: string[],
//   title: ApexTitleSubtitle
// };

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



}
