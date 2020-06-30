import { Component } from '@angular/core';
import {ExpressmongoService} from '../expressmongo.service'
import {HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  outMsg: any; id: any; desc: any; price: any; quantity: any; reorder:any; outRec: any;
 
  constructor(private mongo: ExpressmongoService) { }
 
  insertNew() {
    

    this.price = Math.round(this.price * 100) / 100 ;

    this.id = Math.trunc(this.id);
    this.quantity = Math.trunc(this.quantity);
    this.reorder = Math.trunc(this.reorder);
  

    const params= { pid: this.id, pdesc: this.desc ,pprice: this.price, preqty: this.reorder,pqty: this.quantity };
  
  this.mongo.insertNew(params).subscribe(data => {this.outMsg= 'Record added.';
  this.outRec= [];},(err: HttpErrorResponse) => {console.log(err.message);
  this.outMsg= err.message;});}

}
