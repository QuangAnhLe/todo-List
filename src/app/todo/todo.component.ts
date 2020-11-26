import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {TodoService} from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray!: any[];
  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
    this.TodoService.getTodoList().snapshotChanges()
    .subscribe(item =>{
      this.toDoListArray = [];
      item.forEach(element=>{
        let x: any = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })

    // sort array isCheck false -> true
       this.toDoListArray.sort((a,b)=> {
          return a.isChecked - b.isChecked;
        })
    });
  
  }

  onAdd(itemTitle: any, itemdatum: any){
    this.TodoService.addTitle(itemTitle.value, itemdatum.value);
    itemTitle.value = null;
    itemdatum.value = null;
  }

  alterCheck($key: string,$key_: string, isChecked: any) {
    this.TodoService.checkOrUnCheckTitle($key,$key_,!isChecked);
  }

  onDelete($key : string,$key_ : string){
    this.TodoService.removeTitle($key,$key_);
  }

}
