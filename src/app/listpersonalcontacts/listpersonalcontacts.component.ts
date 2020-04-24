import { Component, OnInit,Input } from '@angular/core';
import {ListcontactsservService} from '../listcontactsserv.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-listpersonalcontacts',
  templateUrl: './listpersonalcontacts.component.html',
  styleUrls: ['./listpersonalcontacts.component.css']
})
export class ListpersonalcontactsComponent implements OnInit {
  @Input() owner:string;
  selectedContact:Contact;
  allContacts:Contact[]=[];
  
  constructor(listCt:ListcontactsservService ) { 
    this.allContacts = listCt.getallContacts();
  }

  ngOnInit(): void {
  }

  selectContact(choosenContact:Contact){
    if(this.selectedContact && this.selectedContact.name === choosenContact.name){
      this.selectedContact = null;
    }
    else{
      this.selectedContact = choosenContact;
    }
    
  }

}
