import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  @Input() product: Product | undefined;
  @Output() deleteProduct: EventEmitter<Product>= new EventEmitter<Product>;
  @Output() displayModalProductView: EventEmitter<Product>= new EventEmitter<Product>;


  ngOnInit(): void {
  }
  handleClickProduct(product: Product | undefined){
    this.displayModalProductView.emit(product)
  }
  deleteClickProduct(product: Product | undefined){
    // this.deleteProduct.emit(product);
  }

}
