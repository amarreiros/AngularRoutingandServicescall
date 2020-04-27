import { Injectable } from '@angular/core';
import {Contact} from './contact';
@Injectable({
  providedIn: 'root'
})
export class ListcontactsservService {
  lista:Contact[] = [
    {name:'Alex',phone: '966210103',email : 'amarreiros@hjh.pt',id: 1, active:true},
    {name:'Ilidio',phone: '966970103',email : 'ilidio@hjh.pt',id: 1, active:true},
    {name:'Sara',phone: '966210103',email : 'amarreiros@hjh.pt',id: 1, active:false},
    {name:'Rui',phone: '966970103',email : 'ilidio@hjh.pt',id: 1, active:true},
  ];

  constructor() { }

  getallContacts():Contact[]{
     return this.lista;
  }

  getContactByName(intendedName:string):Contact{
    let ct:Contact[] = this.lista.filter(x => { 
                      if(x.name === intendedName){

                        return x;
              }});


    return ct[0];
  }

  
  addContact(ct:Contact){
   this.lista.push(ct); 
  }
}
