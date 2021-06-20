import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodoService } from '../services/todo.serivce';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-form-modal',
  templateUrl: './task-form-modal.component.html',
  styleUrls: ['./task-form-modal.component.css']
})
export class TaskFormModalComponent implements OnInit {

  task: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<TaskFormModalComponent>,
              private dialog: MatDialog, private todoService: TodoService, private _formBuilder: FormBuilder) { 
                  this.task = Object.assign({}, data);
              }

  ngOnInit(): void {
  }

  closeDialog(){
      this.dialogRef.close();
  }

  saveTask(task: any){
    this.todoService.updateTask(task).subscribe((data) => {
      this.dialogRef.close(this.task);
    }, err => {
      //do something if reponse from server is an error
      if (err.status === 500){
        
      } 
      if (err.status === 400){

      }
    });

  }
}
