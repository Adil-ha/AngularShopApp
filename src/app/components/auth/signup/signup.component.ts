import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstname : string = "";
  names : string[] = [];

  handleSave(){
    if (this.firstname) {
      this.names.push(this.firstname);
      this.firstname="";
    }
  }

  handleDelete(index : number){
    if (index >= 0) {
      const newArray = this.names.splice(index,1)
    }
  }

}
