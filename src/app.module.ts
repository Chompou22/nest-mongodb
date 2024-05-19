import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
config();

const MongoDB = process.env.MONGO_URI as string;
@Module({
  imports: [MongooseModule.forRoot(MongoDB), UsersModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
