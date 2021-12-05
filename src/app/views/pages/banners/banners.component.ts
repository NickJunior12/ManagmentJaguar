import { Component, OnInit } from '@angular/core';
import {BannersService} from 'src/app/core/services/banners.service';
import { BannerModel } from 'src/app/core/models-general/banner-model';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
listaBanners: BannerModel[] = [];

  constructor( private banner: BannersService) { }

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners(){
    this.banner.getBanners()
              .subscribe (resp => {
                console.log('Obteniendo datos de banners');
                console.log(resp);
                console.log(resp.banners);
                this.listaBanners = resp.banners;
              }, error => {
                  console.log('error');
              });
  }

}
