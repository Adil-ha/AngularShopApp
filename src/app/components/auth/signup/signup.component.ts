import { Component } from '@angular/core';
import { User } from "src/app/models/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

//   firstname : string = "";
//   names : string[] = [];
//   updateIndex :number=-1;

//   handleSave(){
//     if (this.firstname) {
//       if (this.updateIndex>=0) {
//         this.names[this.updateIndex]=this.firstname
//       } else {
//         this.names.push(this.firstname);
//       }
//       this.firstname="";
//       this.updateIndex = -1;
//     }
//   }

//   handleDelete(index : number){
//     if (index >= 0) {
//       this.names.splice(index,1)
//     }
//   }
//   handleUpdate(name:string, index:number){
//     this.firstname = name;
//     this.updateIndex=index;
//   }

    user:User={
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      passwordConfirm:""
    }

    handleSubmit(){
      console.log(this.user);
    }

}
