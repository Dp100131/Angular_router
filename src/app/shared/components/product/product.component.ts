import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: -1,
      name: '',
    },
    description: ''
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  rootToDetail: string = '';

  constructor(
    private location: Location
  ) {
    this.rootToDetail = (this.location.path().split('/')[1])
    if(this.rootToDetail === "category"){
      this.rootToDetail = this.location.path()
    }else{
      this.rootToDetail = (this.location.path().split('/')[1])
    }
  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onShowDetail() {
    this.showProduct.emit(this.product.id);
  }

}
