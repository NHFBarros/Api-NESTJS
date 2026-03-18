import { Injectable } from "@nestjs/common";
import { CreateTodoRepository } from "../repositories/create-todo.repositories";
import { ITodoEntity } from "../interfaces/ITodoEntity";
import { TodoDocument } from "../Schema/todo.schema";

@Injectable()
export class CreateTodoService {
  constructor(private readonly createTodoRepository: CreateTodoRepository) {}

  // Aqui eu colocaria a lógica de negócio ex: validar se o To do já existe, se o nome é válido, etc.
  
  async execute(event: ITodoEntity): Promise<TodoDocument> {
    let newTodo = await this.createTodoRepository.execute(event);
    return newTodo;
  }
}