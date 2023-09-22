import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ReversePipe } from './pipes/reverse.pipe';


@NgModule({
  declarations: [
    TimeAgoPipe,
    ReversePipe,
    ProductComponent,
    ProductsComponent,
    ImgComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule

  ],
  exports:[
    TimeAgoPipe,
    ReversePipe,
    ProductComponent,
    ProductsComponent,
    ImgComponent

  ]
})
export class SharedModule { }
