import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongModel } from './songs.model';

@Controller('songs')
export class SongsController {
  constructor(private readonly service: SongsService) {}

  @Post()
  postSongs(@Body() newSong: SongModel) {
    return this.service.postSongs(newSong);
  }

  @Get()
  getSongs() {
    return this.service.getSongs();
  }

  @Get(':id')
  getSongsByID(@Param('id') id: number) {
    return this.service.getSongsByID(id);
  }

  @Put(':id')
  updateSong(@Param('id') id: string, @Body() newSong: SongModel) {
    const songId = parseInt(id, 10); 
    return this.service.putSongs(newSong, songId);
  }

  @Delete(':id')
  deleteSong(@Param('id') id: string) {
    const deletedSong = this.service.deleteSongs(Number(id)); 
    if (deletedSong) {
      return { message: 'Canción eliminada', song: deletedSong };
    } else {
      return { message: 'Canción no encontrada', statusCode: 404 };
    }
  }
}