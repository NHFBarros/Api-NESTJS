import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateTodoService } from './services/create-todo.service';
import type { ITodoEntity } from './interfaces/ITodoEntity';
import { Todo } from './Schema/todo.schema';
import { GetTodoService } from './services/get-todo.service';
import { UpdateTodoService } from './services/update-todo.service';
import { DeleteTodoService } from './services/delete-todo.service';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly createTodoService: CreateTodoService,
        private readonly getTodoService: GetTodoService,
        private readonly updateTodoService: UpdateTodoService,
        private readonly deleteTodoService: DeleteTodoService
    ) {}

    @Post('create')
    async createTodo(@Body() event: ITodoEntity): Promise<ITodoEntity> {
        return this.createTodoService.execute(event);
    }

    @Get('all')
    async getAll(): Promise<Todo[]> {
        return this.getTodoService.execute();
    }

    @Put('update/:id')
    async updateTodo(
        @Param('id') id: string,
        @Body() updateData: Partial<ITodoEntity>,
    ): Promise<Todo | null> {
        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid id (expected Mongo ObjectId)');
        }
        if (!updateData || typeof updateData !== 'object' || Array.isArray(updateData)) {
            throw new BadRequestException('Request body must be a JSON object with fields to update');
        }
        if (Object.keys(updateData).length === 0) {
            throw new BadRequestException('Request body is empty');
        }
        return this.updateTodoService.execute(id, updateData);
    }

    @Delete('delete/:id')
    async deleteTodo(@Param('id') id: string): Promise<ITodoEntity | null> {
        if (!Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid id (expected Mongo ObjectId)');
        }
        return this.deleteTodoService.deleteTodo(id);
    }
}
