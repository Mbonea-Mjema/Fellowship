import { Component, OnInit } from "@angular/core";
import { DataService } from "../Services/data.service";
import { FirebaseService } from "../Services/firebase.service";
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  constructor(private transfer: DataService, private db: FirebaseService) {}
  Details: object;
  user: object;
  info: object;
  size = "Size";
  Sizes = ["SMALL", "MEDIUM", "LARGE", "XXL"];
  ngOnInit() {
    //product data
    this.transfer.Data.subscribe(data => {
      this.Details = {
        name: data.name,
        image: data.image
      };
      console.log(this.Details);
    });

    //user data
    this.db.User.subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
    console.log(this.user);
  }
  setSize(s) {
    this.size = s;
  }

  Order() {
   
    console.log(this.size);
    console.log(this.user);

    this.db.dataBase.collection("Orders").doc(this.user.user.displayName).set({
      name:this.user.user.displayName,
      size:this.size,
      type:this.Details.name
  })
  }
}
