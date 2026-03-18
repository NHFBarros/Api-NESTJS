import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);