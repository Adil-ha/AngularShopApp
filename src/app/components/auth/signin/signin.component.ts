import { Component } from '@angular/core';
import { User } from "src/app/models/user";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user:User={
    email:"",
    password:"",
  }
  handleSubmit(){
    console.log(this.user);
  }
}
