import { Injectable } from '@nestjs/common';
import { GetTodoRepository } from '../repositories/get-todo.repositories';
import { Todo } from '../Schema/todo.schema';

@Injectable()
export class GetTodoService {
    constructor(private readonly getTodoRepository: GetTodoRepository) {}

    async execute(): Promise<Todo[]> {
        return this.getTodoRepository.findAll();
    }
}