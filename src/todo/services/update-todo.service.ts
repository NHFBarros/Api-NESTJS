import { Injectable } from "@nestjs/common";
import { UpdateTodoRepository } from "../repositories/update-todo.repositories";
import { ITodoEntity } from "../interfaces/ITodoEntity";
import { TodoDocument } from "../Schema/todo.schema";


@Injectable()
export class UpdateTodoService{
    constructor(private readonly updateTodoRepository: UpdateTodoRepository){}

    async execute(id: string, updateData: Partial<ITodoEntity>): Promise<TodoDocument | null> {
        const updatedTodo = await this.updateTodoRepository.updateTodo(id, updateData) as TodoDocument | null;
        return updatedTodo;
    }
}