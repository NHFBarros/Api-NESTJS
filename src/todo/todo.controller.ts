import { Controller, Post, Get } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateTodoService } from './services/create-todo.service';
import type { ITodoEntity } from './interfaces/ITodoEntity';
import { Todo } from './Schema/todo.schema';
import { GetTodoService } from './services/get-todo.service';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly createTodoService: CreateTodoService,
        private readonly getTodoService: GetTodoService,
    ) {}

    @Post('create')
    async createTodo(@Body() event: ITodoEntity): Promise<ITodoEntity> {
        return this.createTodoService.execute(event);
    }

    @Get('all')
    async getAll(): Promise<Todo[]> {
        return this.getTodoService.execute();
    }
}
