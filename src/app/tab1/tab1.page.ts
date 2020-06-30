import { Component } from '@angular/core';
import {ExpressmongoService} from '../expressmongo.service'
import { HttpErrorResponse } from '@angular/common/http';
import { PDATA } from '../../assets/data/pData';
import {Pdata} from '../pdata';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 
  outRec: any;
  datab: any;
  collection : any;
  called: boolean = false;
 
  constructor(private mongo: ExpressmongoService) { }

 outMsg : any;
  insert() {
    
  const params= { db: this.datab, ct: this.collection };

  this.mongo.insert(PDATA).subscribe(data => {this.outMsg= 'Record added.';
  this.outRec= [];},(err: HttpErrorResponse) => {console.log(err.message);
  this.outMsg= err.message;});
  this.called = true;
  }

  createDatabase() {
    
    const params= { db: this.datab, ct: this.collection };

    console.log(params)
  
    this.mongo.createDatabase(params).subscribe(data => {this.outMsg= 'Record added.';
    this.outRec= [];},(err: HttpErrorResponse) => {console.log(err.message);
    this.outMsg= err.message;});
    this.called = true;
    }
 

 
  retrieve() {
  this.mongo.retrieve().subscribe(data => {
    console.log(data);
    this.outRec= data;
    this.outMsg= this.outRec.length + ' records retrieved';
  console.log(data.toString());
  },
    (err: HttpErrorResponse) => {console.log(err.message);
    this.outMsg= err.message;});}
 

}

