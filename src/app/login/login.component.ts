// login.component.ts

import { Component } from "@angular/core";

@Component({
  selector: "login",
  templateUrl: ["./login.component.html"],
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: string;
  password: string;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}