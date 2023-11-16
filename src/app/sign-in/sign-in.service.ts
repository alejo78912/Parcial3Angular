import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private usuarios: any[] = [
    {
      userId: 1091884262,
      userPhoneNumber: 3207387511,
      userAge: 19,
      userType: 'Admin',
      userName: 'alejo78912',
      userPassword: '123456',
      userEmail: 'aleva@'
    },
    {
      userId: 100256344,
      userPhoneNumber: 3217559859,
      userAge: 20,
      userType: 'Gamer',
      userName: 'alejoa78912',
      userPassword: '12345',
      userEmail: 'alejandra@'
    },
    {
      userId: 1091884262,
      userPhoneNumber: 3207387511,
      userAge: 19,
      userType: 'Invitado',
      userName: 'prueba78912',
      userPassword: '123458',
      userEmail: 'invitado@'
    },
    {
      userId: 1455555,
      userPhoneNumber: 232544554,
      userAge: 14,
      userType: 'Gamer',
      userName: 'prueba1456',
      userPassword: '12354',
      userEmail: 'gamer@'
    },
  ];

  agregarUsuario(usuario: User) {
    this.usuarios.push(usuario);
  }

  buscarUsuarioPorEmailYContraseña(email: string, contraseña: string): User {
    return this.usuarios.find(user => user.userEmail === email && user.userPassword === contraseña);
  }

  buscarRolUsuario(email: string): string {
    const usuario = this.usuarios.find(user => user.userEmail === email);
    return usuario ? usuario.userType : '';
  }

  // Nuevo método para buscar usuario por email
  buscarUsuarioPorEmail(email: string): User {
    return this.usuarios.find(user => user.userEmail === email);
  }
}
