import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {TodoComponent} from './todo/todo.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
