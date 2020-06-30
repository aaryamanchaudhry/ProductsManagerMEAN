import { Component } from '@angular/core';
import {ExpressmongoService} from '../expressmongo.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  outRec: any;
  outMsg : any;
  constructor(private mongo: ExpressmongoService) {

    this.retrieve();
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
