import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../Services/firebase.service";
import {  Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private firebase: FirebaseService, private routing: Router) {}

  ngOnInit() {}

  login(sub:Event) {
    sub.preventDefault()
    console.log("clicked");
    this.firebase.doGoogleLogin().then(data => {
      if (data != NaN) {
        console.log(data);
        this.routing.navigate(["/Product"]);
      }
    });
  }
}
