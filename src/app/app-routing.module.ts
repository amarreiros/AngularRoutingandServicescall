
import { Routes, RouterModule} from '@angular/router';

import { ListpersonalcontactsComponent } from './listpersonalcontacts/listpersonalcontacts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DummyComponent } from './dummy/dummy.component';
import { Gallery } from './gallery/gallery.component';



const routes: Routes = [
  { path: 'gallery', component: Gallery},
  { path: 'lista', component: ListpersonalcontactsComponent},
  { path: 'contacto/:name', component: ContactsComponent},
  { path:'dummy-demo/:name' , component: DummyComponent },
  { path:'dummy-demo' , component: DummyComponent },
  { path: '', component: ListpersonalcontactsComponent}


];

export const AppRoutingModule  = RouterModule.forRoot(routes);
