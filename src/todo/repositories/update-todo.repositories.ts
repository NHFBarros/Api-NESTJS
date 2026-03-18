import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from '../Schema/todo.schema';

@Injectable()
export class UpdateTodoRepository{
    constructor(
        @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
    ){}

    async updateTodo(id: string, updateData: Partial<Todo>): Promise<Todo | null> {
        const updatedTodo = await this.todoModel.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true }
        ).lean().exec();
        return updatedTodo;
    }

}