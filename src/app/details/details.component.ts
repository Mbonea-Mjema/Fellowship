import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service'
import { FirebaseService } from '../Services/firebase.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private transfer: DataService, private db:FirebaseService) { }
  Details: object;
  user: object;
  info: object;
  ngOnInit() {
    
    //product data
    this.transfer.Data.subscribe(data => {
      this.Details =
        {
          'name': data.name,
          'image': data.image,
        }
      console.log(this.Details)
    })
    
    //user data
    this.db.User.subscribe(data=>{
      this.user=data;
    })
  }

  Order() {
  let size:any= document.getElementById("size");
  console.log(size);


  }

}
