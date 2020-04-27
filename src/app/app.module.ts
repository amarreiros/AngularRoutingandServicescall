import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ListpersonalcontactsComponent } from './listpersonalcontacts/listpersonalcontacts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DummyComponent } from './dummy/dummy.component';
import { Gallery } from './gallery/gallery.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListpersonalcontactsComponent,
    ContactsComponent,
    DummyComponent,
    Gallery,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
