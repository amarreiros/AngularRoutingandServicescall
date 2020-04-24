import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class Gallery implements OnInit {
  images = [];
  api:ApiService;
  constructor(apiService: ApiService) { 
    this.api = apiService;

  }

  ngOnInit(): void {
    this.api.getAll().subscribe(( data: any[])=>{
      this.images = data;
      console.log(data);
      }
    );
  }

}
