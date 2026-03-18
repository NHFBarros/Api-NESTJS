import { Injectable } from "@nestjs/common";
import { ITodoEntity } from "../interfaces/ITodoEntity";
import { TodoDocument } from "../Schema/todo.schema";
import { DeleteTodoRepository } from "../repositories/delete-todo.repositories";


@Injectable()
export class DeleteTodoService{
    constructor(private readonly deleteTodoRepository: DeleteTodoRepository){}

    async deleteTodo(id: string): Promise<ITodoEntity | null> {
        return await this.deleteTodoRepository.deleteTodo(id);
    }
}