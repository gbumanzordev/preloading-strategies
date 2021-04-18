import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { RouterModule } from '@angular/router';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [TodosComponent, TodoCardComponent, TodoDetailsComponent],
  imports: [CommonModule, RouterModule, TodosRoutingModule],
  providers: [TodosService],
})
export class TodosModule {}
