import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { CreateTodoService } from './services/create-todo.service';
import { CreateTodoRepository } from './repositories/create-todo.repositories';
import { Todo, TodoSchema } from './Schema/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { GetTodoService } from './services/get-todo.service';
import { GetTodoRepository } from './repositories/get-todo.repositories';

@Module({
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],
  providers: [CreateTodoService, CreateTodoRepository, GetTodoService, GetTodoRepository],
  controllers: [TodoController],
  exports: [CreateTodoService, CreateTodoRepository, GetTodoService, GetTodoRepository],
})
export class TodoModule {}
