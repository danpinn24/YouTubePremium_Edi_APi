import { Injectable } from '@nestjs/common';
import { UserModel } from './users.model';

@Injectable()
export class UsersService { 
    users =[]
    constructor() {
    let user = {
        "id": 12345,      
        "name": "Maria",       
        "email": "maria123@gmail.com",      
        "password": "maria15",
    }
    this.users.push(user)
    user = {
        "id": 77777,      
        "name": "Jose",       
        "email": "jose123@gmail.com",      
        "password": "jose24",
    }
    this.users.push(user)
    user = {
        "id": 18157,      
        "name": "Franco",       
        "email": "fran97@gmail.com",      
        "password": "fran24",
    }
    this.users.push(user)
}


getUsers() {
    return  this.users;
}

getUsersByID(id: number) {
    for (const usuario of  this.users) {
        if (usuario.id == id) {
            return usuario;
        }
    }
}


postUsers(user: UserModel){
    let newUser = {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "password": user.password,
    }
    this.users.push(user)
    return newUser;
}

putUsers(newUser: UserModel, id: number): string {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
        this.users[index] = { ...this.users[index], ...newUser }; 
        return 'Usuario actualizado con éxito';
    }
    return 'Usuario no encontrado';
}

deleteUsers(id: number): UserModel | null {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
        return this.users.splice(index, 1)[0]; // Retorna el usuario eliminado
    }
    return null; // Retorna null si no se encuentra
}
}