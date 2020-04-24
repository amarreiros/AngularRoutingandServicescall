import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  title:string;
  constructor(actRoute: ActivatedRoute) { 
    this.title = actRoute.snapshot.params.name;


  }

  ngOnInit(): void {

  }

}
