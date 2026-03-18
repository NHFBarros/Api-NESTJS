import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { CreateTodoService } from './services/create-todo.service';
import { CreateTodoRepository } from './repositories/create-todo.repositories';
import { Todo, TodoSchema } from './Schema/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { GetTodoService } from './services/get-todo.service';
import { GetTodoRepository } from './repositories/get-todo.repositories';
import { UpdateTodoRepository } from './repositories/update-todo.repositories';
import { UpdateTodoService } from './services/update-todo.service';
import { DeleteTodoRepository } from './repositories/delete-todo.repositories';
import { DeleteTodoService } from './services/delete-todo.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],
  providers: [CreateTodoService, CreateTodoRepository, GetTodoService, GetTodoRepository, UpdateTodoService, UpdateTodoRepository, DeleteTodoRepository, DeleteTodoService],
  controllers: [TodoController],
  exports: [CreateTodoService, CreateTodoRepository, GetTodoService, GetTodoRepository, UpdateTodoService, UpdateTodoRepository, DeleteTodoRepository, DeleteTodoService],
})
export class TodoModule {}
