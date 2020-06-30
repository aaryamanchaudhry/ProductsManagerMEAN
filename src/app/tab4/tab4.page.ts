import { Component, OnInit } from '@angular/core';
import{ActionSheetController, AlertController}from'@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';
import {ExpressmongoService} from '../expressmongo.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

 

  constructor(public actionSheetController:ActionSheetController, public alertController:AlertController,private mongo: ExpressmongoService){
    this.retrieve();
  }

  gay: any;
outRec : any;
outMsg: any;
recid : any;
outRec2: any;
valuefordelete :any;

id:any;
qty:any;
reqty:any;
desc:any;
price:any;

  retrieve() {
    this.mongo.retrieve().subscribe(data => {
      console.log(data);
      this.outRec= data;
      
      this.outMsg= this.outRec.length + ' records retrieved';
    console.log(data.toString());
    },
      (err: HttpErrorResponse) => {console.log(err.message);
      this.outMsg= err.message;});}
     

      setValue(value): void {
        this.recid = value;
    }
  async presentActionSheet()
  {
    
    const actionSheet= await this.actionSheetController.create({header:'Menu',
  buttons: [ {text:'Delete', icon:'trash',role:'destructive',handler:()=>{ 

    this.delete();
   } },
  { text:'Edit', icon:'share', handler:()=>{this.presentAlertPrompt();} },
  {text:'Cancel',icon:'close',role:'cancel',handler:()=>{ console.log('Cancel');} }]});await actionSheet.present();}


  retrievewithquery(rec) {
    rec = JSON.stringify(rec);
    console.log(rec)
    this.valuefordelete = rec;
    this.mongo.retrievewithquery(rec).subscribe(data => {
      console.log(data);
      this.outRec2= data;
      this.outMsg= this.outRec.length + ' records retrieved';
      
    },
      (err: HttpErrorResponse) => {console.log(err.message);
      this.outMsg= err.message;});}


      delete() {
        var rec;
        rec = this.valuefordelete;
        console.log(rec)
        
        this.mongo.delete(rec).subscribe(data => {
          console.log(data);
          this.outRec2= data;
          this.outMsg= this.outRec.length + ' records retrieved';
         
        },
          (err: HttpErrorResponse) => {console.log(err.message);
          this.outMsg= err.message;});}

          deleteAll() {
            
            
            this.mongo.deleteAll().subscribe(data => {
              console.log(data);
              this.outRec2= data;
              this.outMsg= this.outRec.length + ' records retrieved';
             
            },
              (err: HttpErrorResponse) => {console.log(err.message);
              this.outMsg= err.message;});}


         update() {


          const params= { id: this.id, desc: this.desc ,price: this.price, reqty: this.reqty, qty: this.qty };
          
            
            this.mongo.update(params).subscribe(data => {
              console.log(data);
              this.outRec2= data;
              this.outMsg= this.outRec.length + ' records retrieved';
             
            },
              (err: HttpErrorResponse) => {console.log(err.message);
              this.outMsg= err.message;});}
    
          



  async presentAlertPrompt() {

    
    const alert = await this.alertController.create({
      header: `Editing ${this.outRec2.pdesc}`,
      inputs: [
        {
          name: 'id',
          type: 'text',
        
         
          placeholder: this.outRec2.pid
        },
        {
          name: 'desc',
          type: 'text',
          id: 'qty-id',
          
          placeholder: this.outRec2.pdesc
        },
        {
          name: 'price',
          type: 'text',
          id: 'price-id',
          
          placeholder: this.outRec2.pprice
        },
        {
          name: 'reqty',
          type: 'text',
          id: 'reqty-id',
          
          placeholder: this.outRec2.preqty
        },
        {
          name: 'qty',
          type: 'text',
          id: 'reqty-id',
          
          placeholder: this.outRec2.pqty
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Modify',
          handler: data => {
         
            

            this.desc = data.desc;
            this.qty = data.qty;
            this.price= data.price;
            this.reqty = data.reqty;
            this.id = data.id;

            this.update();
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
