import { Component, OnInit,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

  products: Product[]=[];
  isDisplayModal:boolean = false;
  modalProduct:Product | undefined;
  productsSub: Subscription | undefined;

  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    // on récuperes les données sans api ni promesse seulement avec injection de dépendance
    // this.products=this.productService.getProducts();

    // ici on récupere avec une promesse depuis le productSercice
    // this.productService.getProducts()
    // .then((products:Product[])=>{
    //   this.products=products
    // }
    // )
    // .catch(()=>{
    //   this.products=[]
    // })

    // ici on récupere les donnees avec un observables dans le productService
    this.productsSub = this.productService.getProducts()
    .subscribe({
      next:(products:Product[])=>{
        this.products=products;
      },
      error:(error:any)=>{
        console.log("Error :", error);
      },
      complete:()=>{
        console.log("complete");
      }
    })
  }
  ngOnDestroy():void{
    this.productsSub?.unsubscribe();
  }

  handleDeleteProduct(product:Product){
    this.products=this.products.filter(p=>p._id !== product._id)
  }

  handleDisplayProductView(product:Product){
    if(product){
      this.isDisplayModal=true;
      this.modalProduct=product;
    }
  }
  handleCloseModal(){
    this.isDisplayModal=false;
    this.modalProduct=undefined;

  }

}
