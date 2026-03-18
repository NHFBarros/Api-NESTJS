import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { TodoDocument } from "../Schema/todo.schema";
import { Todo } from "../Schema/todo.schema";
import { InjectModel } from "@nestjs/mongoose";
import { ITodoEntity } from "../interfaces/ITodoEntity";

@Injectable()
export class CreateTodoRepository {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
    ){}

    async execute(event: ITodoEntity) : Promise<TodoDocument> {
        const newTodo = new this.todoModel(event);
        await newTodo.save();
        return newTodo.toObject();
    }
}