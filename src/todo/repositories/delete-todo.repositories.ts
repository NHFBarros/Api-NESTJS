import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from '../Schema/todo.schema';

@Injectable()
export class DeleteTodoRepository{
    constructor(
        @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
    ){}

    async deleteTodo(id: string): Promise<Todo | null> {
        const deletedTodo = await this.todoModel.findByIdAndDelete(id).lean().exec();
        return deletedTodo;
    }

}