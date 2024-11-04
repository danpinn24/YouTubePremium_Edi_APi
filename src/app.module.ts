import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, SongsController],
  providers: [AppService, UsersService, SongsService],
})
export class AppModule {}
