import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { TaskFormModalComponent } from './task-form-modal/task-form-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskFormModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'todo', component: TodoComponent}
    ]),
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MatDialogRef, useValue: []
    },
    {
      provide: MAT_DIALOG_DATA, useValue: []
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
