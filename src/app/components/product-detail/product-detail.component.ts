import { Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy{

   slug : string | undefined;
   product:Product | undefined;
   productSub: Subscription | undefined


   constructor(private route : ActivatedRoute, private productService: ProductService){}

   ngOnInit(){
    this.slug= this.route.snapshot.params["slug"];

    this.productSub= this.productService.getProducts()
    .subscribe({
      next: (products: Product[])=>{
        this.product = products.filter(p => p.slug === this.slug)[0]
      },
      error: (error: any)=>{
        console.log("Error:", error)
      },
      complete:()=>{
        console.log("complete");
      }
    })

    }

    ngOnDestroy(){
      this.productSub?.unsubscribe();
    }
}
