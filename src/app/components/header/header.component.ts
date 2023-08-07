import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{

  data:Number |undefined ;
  second:Number | undefined;
  secondSub: Subscription | undefined;
  constructor(private productService:ProductService){}

  ngOnInit(): void {
      // this.productService.getNumber()
      // .subscribe(
      //   (value)=>{
      //     this.data=value;
      //   }
      // )

      this.secondSub= this.productService.getSecond()
      .subscribe({
        next:(value:Number)=>{
          this.second=value;
        },
        error:(error:any)=>{
          console.log(error);
        },
        complete:()=>{
          console.log("complete");
        }
      }

      )
  }
  ngOnDestroy():void{
    this.secondSub?.unsubscribe();
  }



}
