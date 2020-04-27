import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:string = "https://jsonplaceholder.typicode.com/photos/";
  client:HttpClient;
  
  constructor(httpClient: HttpClient) { 
    this.client = httpClient;

  }

  getAll(){ //typically called fetchData
    return this.client.get(this.serverUrl);
  }

}
