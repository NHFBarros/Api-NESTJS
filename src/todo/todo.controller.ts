import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateTodoService } from './services/create-todo.service';
import type { ITodoEntity } from './interfaces/ITodoEntity';

@Controller('todo')
export class TodoController {
    constructor(private readonly createTodoService: CreateTodoService) {}

    @Post('create')
    async createTodo(@Body() event: ITodoEntity): Promise<ITodoEntity> {
        return this.createTodoService.execute(event);
    }
}
