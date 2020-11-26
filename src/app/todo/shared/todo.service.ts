import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList!: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getTodoList(){
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTitle(title: string,datum: string){
    this.toDoList.push({
      datum: datum,
      title: title,
      isChecked: false
    });
  }

  checkOrUnCheckTitle($key: string,$key_:string,flag: boolean){
    this.toDoList.update($key, {isChecked: flag});
    this.toDoList.update($key_, {isChecked: flag});
  }

  removeTitle($key: string,$key_:string){
    this.toDoList.remove($key),$key_;
  }

  

}
