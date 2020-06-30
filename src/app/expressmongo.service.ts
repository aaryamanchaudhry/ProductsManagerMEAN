import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { insertView } from '@ionic/angular/directives/navigation/stack-utils';



@Injectable({
  providedIn: 'root'
})
export class ExpressmongoService {

  constructor(private http: HttpClient) {}

    insert(params){
      return this.http.post('http://127.0.0.1:8887/insert/', { params });
      
    }

    insertNew(params){
      return this.http.post('http://127.0.0.1:8887/insertNew/', { params });
      
    }

    retrieve(){
      return this.http.post('http://127.0.0.1:8887/retrieve/', {});
      
    }

    retrievewithquery(params){
      return this.http.post('http://127.0.0.1:8887/retrievewithquery/', { params });
      
    }

    createDatabase(params){
      return this.http.post('http://127.0.0.1:8887/createDatabase/', { params });
      
    }

    delete(params){
      return this.http.post('http://127.0.0.1:8887/delete/', { params });
      
    }

    
    update(params){
      return this.http.post('http://127.0.0.1:8887/update/', { params });
      
    }

    deleteAll(){
      return this.http.post('http://127.0.0.1:8887/deleteAll/', {});
      
    }


   
}
