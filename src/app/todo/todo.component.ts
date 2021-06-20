import { Component, OnInit, Inject } from '@angular/core';
import { TodoService} from '../services/todo.serivce';
import { TaskFormModalComponent } from '../task-form-modal/task-form-modal.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskList: any;
  today: Date = new Date();


  constructor(private todoService: TodoService, private matDialogRef: MatDialogRef<TaskFormModalComponent>,
              private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any) {
    this.todoService = todoService;
   }

  ngOnInit(): void {

    this.todoService.getTasks().subscribe((data) => {

      this.filterTasks(data);
      
    }, err => {
      //do something if reponse from server is an error
      if (err.status === 500){
        
      } 
      if (err.status === 400){

      }
    });
  }

  openTaskFormModal(task: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = task;
    dialogConfig.disableClose = true;
    const taskDialogRef = this.dialog.open(TaskFormModalComponent, dialogConfig);
    taskDialogRef.afterClosed().subscribe( data => {
      if (data){
        for (let i = 0; i < this.taskList.length; i++) {
          if (this.taskList[i].id === data.id){
            this.taskList[i] = data;
          }
        }
        this.filterTasks(this.taskList);
      }
    
    })
  }

  filterTasks(data: any){
    this.taskList = data.sort((a: any, b: any) => {
      if (a.isComplete === b.isComplete){
        return Date.parse(a.dueDate? a.dueDate: this.today) - Date.parse(b.dueDate? b.dueDate: this.today);
      } else {
        return a.isComplete - b.isComplete;
      }
    });

  }

  updateTask(task: any){
    this.openTaskFormModal(task);

  }
}
