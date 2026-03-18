import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error('Missing MONGODB_URI. Create it in src/.env or export it in your shell.');
}

@Module({
  imports: [TodoModule,
    MongooseModule.forRoot(mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
