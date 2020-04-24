import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ListcontactsservService} from '../listcontactsserv.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  name:string;
  @Input() innerContact:Contact;
  
  constructor(actRoute: ActivatedRoute, listaContactos: ListcontactsservService) { 
    this.name = actRoute.snapshot.params.name;
    this.innerContact = listaContactos.getContactByName(this.name);
  }

  ngOnInit(): void {

  }

}
