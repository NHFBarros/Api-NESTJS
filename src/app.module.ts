import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TodoModule,
    MongooseModule.forRoot('mongodb+srv://nhfbarros:GMK1ZFLhakojDRcl@teste.p3tvd3u.mongodb.net/?appName=teste')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
