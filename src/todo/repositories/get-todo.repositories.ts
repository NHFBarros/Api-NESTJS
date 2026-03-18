import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from '../Schema/todo.schema';

@Injectable()
export class GetTodoRepository {
    constructor(
        @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
    ){}

    async findAll(): Promise<Todo[]> {
        return this.todoModel.find().lean().exec();
    }
}