import { Injectable } from '@nestjs/common';
import { SongModel } from './songs.model';

@Injectable()
export class SongsService { 
    songs =[]
    constructor() {
    let song = {
        id: 1,
        title: 'All the Small Things',
        artist: 'Blink',
        album: 'Enema of the State',
        releaseDate: new Date('1999-04-18'),
        genre: 'Pop Punk',
        duration: 182, 
    }
    this.songs.push(song)
    song = {
        id: 2,
        title: 'In the End',
        artist: 'Linkin Park',
        album: 'Hybrid Theory',
        releaseDate: new Date('2001-10-12'),
        genre: 'Nu Metal',
        duration: 216,
    }
    this.songs.push(song)
    song = {
        id: 3,
        title: 'Stressed Out',
        artist: 'Twenty One Pilots',
        album: 'Blurryface',
        releaseDate: new Date('2015-04-28'),
        genre: 'Alternative Hip Hop',
        duration: 199,
    }
    this.songs.push(song)
}


getSongs() {
    return this.songs;
}

getSongsByID(id: number) { 
    for (const cancion of  this.songs) {
        if (cancion.id == id) {
            return cancion;
        }
    }
}
getSongsByArtist(artist: string) {
    // Filtramos las canciones que tengan el nombre del artista que se pasa como argumento.
    const songsByArtist = this.songs.filter(song => song.artist.toLowerCase() === artist.toLowerCase());
    
    // Si no hay canciones encontradas, devolvemos un mensaje indicando eso.
    if (songsByArtist.length === 0) {
        return `No se encontraron canciones del artista: ${artist}`;
    }
    
    // Devolvemos la lista de canciones encontradas.
    return songsByArtist;
}

postSongs(song: SongModel) {
    const newSong = {
        "id": song.id,               
        "title": song.title,       
        "artist": song.artist,      
        "album": song.album,       
        "genre": song.genero,         
        "releaseDate": song.releaseDate, 
        "duration": song.duration,    
    };
    this.songs.push(song); 
    return newSong; 
}

putSongs(newSong: SongModel, id: number): string {
    const index = this.songs.findIndex(song => song.id === id);
    if (index !== -1) {
        this.songs[index] = { ...this.songs[index], ...newSong }; 
        return 'La canción ha sido actualizada con éxito';
    }
    return 'La canción no ha sido encontrada';
}

deleteSongs(id: number): SongModel | null {
    const index = this.songs.findIndex(song => song.id === id);
    if (index !== -1) {
        return this.songs.splice(index, 1)[0]; 
    }
    return null; 
}
}