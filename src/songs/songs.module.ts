import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller'; // Asegúrate de que la ruta sea correcta
import { SongsService } from './songs.service'; // Asegúrate de que la ruta sea correcta

@Module({
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}