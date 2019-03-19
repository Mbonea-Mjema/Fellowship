import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {DataService} from '../Services/data.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  constructor( private routing: Router,private tranfer:DataService) { }

  ngOnInit() {
  }
 Buy(img:string,name:string){
  let image:any= document.getElementById(img).src;
  console.log(image)
  let detail= document.getElementById(name).textContent;
  let data:object={'image':image,'name':detail}
  this.tranfer.Data.next(data);
  console.log(data)
  
  this.routing.navigate(["/Details"]);
  console.log(data)
 }


}
